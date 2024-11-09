# PHP.production.dockerfile
FROM php:8.2-alpine

RUN apk add --no-cache bash curl linux-headers icu-dev \
    && docker-php-ext-install mysqli pdo pdo_mysql intl \
    && rm -rf /var/cache/apk/*

COPY --from=composer:2 /usr/bin/composer /usr/bin/composer

ADD https://github.com/jwilder/dockerize/releases/download/v0.6.1/dockerize-linux-amd64-v0.6.1.tar.gz /tmp/
RUN tar -C /usr/local/bin -xzvf /tmp/dockerize-linux-amd64-v0.6.1.tar.gz && rm /tmp/dockerize-linux-amd64-v0.6.1.tar.gz

WORKDIR /app

COPY composer.json composer.lock ./
RUN composer install --no-scripts --no-autoloader --no-dev --prefer-dist --no-progress --optimize-autoloader
COPY . .

EXPOSE 80

ENTRYPOINT ["bash", "./docker/PHP.sh"]
