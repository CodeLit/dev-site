FROM php:8.0.2-fpm-alpine

WORKDIR /var/www/html

ENV WWWUSER=sail \
    WWWGROUP=sail

RUN apk update \
    && apk --no-cache add py3-setuptools supervisor

RUN apk --no-cache add tzdata \
    && cp /usr/share/zoneinfo/Asia/Tbilisi /etc/localtime \
    && echo "Asia/Tbilisi" > /etc/timezone \
    && echo date

RUN apk --no-cache add bash \
    && sed -i 's/bin\/ash/bin\/bash/g' /etc/passwd

RUN apk --no-cache add \
        php8 \
        php8-common \
        php8-fpm \
        php8-pdo \
        php8-opcache \
        php8-zip \
        php8-phar \
        php8-iconv \
        php8-cli \
        php8-curl \
        php8-openssl \
        php8-mbstring \
        php8-tokenizer \
        php8-fileinfo \
        php8-json \
        php8-xml \
        php8-xmlwriter \
        php8-simplexml \
        php8-dom \
        php8-pdo_sqlite \
        php8-pdo_pgsql \
        php8-pgsql \
        php8-tokenizer \
        php8-pecl-redis \
        php8-ctype \
        php8-gd \
        php8-xmlreader \
    && ln -s /usr/bin/php8 /usr/bin/php
COPY php.ini /etc/php/8.0/cli/conf.d/99-sail.ini

RUN touch /var/run/supervisord.pid \
    && mkdir -p /etc/supervisor.d/conf.d \
    && mkdir -p /var/log/supervisor \
    && touch /var/log/supervisor/supervisord.log
COPY supervisord.conf /etc/supervisor/conf.d/supervisord.conf

COPY start-container /usr/local/bin/start-container
RUN chmod +x /usr/local/bin/start-container

RUN addgroup sail \
    && adduser -h /var/www/html -s /bin/bash -G sail -D sail

EXPOSE 80

ENTRYPOINT ["start-container"]
