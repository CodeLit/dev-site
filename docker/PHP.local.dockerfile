# PHP.local.dockerfile
FROM php:8.2-alpine

RUN apk update && apk add --no-cache bash curl linux-headers icu-dev \
    && docker-php-ext-install mysqli pdo pdo_mysql intl \
    && apk add --no-cache --virtual .build-deps $PHPIZE_DEPS \
#    && pecl install xdebug \
#    && docker-php-ext-enable xdebug \
    && apk del -f .build-deps \
    && rm -rf /var/cache/apk/*

COPY --from=composer:latest /usr/bin/composer /usr/bin/composer

ADD https://github.com/jwilder/dockerize/releases/download/v0.6.1/dockerize-linux-amd64-v0.6.1.tar.gz /tmp/
RUN tar -C /usr/local/bin -xzvf /tmp/dockerize-linux-amd64-v0.6.1.tar.gz && rm /tmp/dockerize-linux-amd64-v0.6.1.tar.gz

WORKDIR /app

COPY composer.json composer.lock ./
RUN composer install --no-scripts --no-autoloader
COPY database ./database
RUN composer install --no-scripts
COPY . .

EXPOSE 80

ENTRYPOINT ["bash", "./docker/PHP.sh"]
