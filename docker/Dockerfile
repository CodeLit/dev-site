FROM composer:lts as composer

WORKDIR /app

COPY composer.json composer.lock ./
RUN composer install --no-dev --prefer-dist --no-scripts --no-autoloader
COPY database ./database
RUN composer install --no-dev --prefer-dist --no-scripts
COPY . .

FROM oven/bun:alpine as app

WORKDIR /app

RUN apk update && apk add --no-cache bash rsync

COPY package.json bun.lockb ./

RUN bun install --production && bun pm cache rm

COPY --from=composer /app/vendor ./vendor

COPY . .

EXPOSE 9000

ENTRYPOINT ["bash", "./docker/entrypoint.sh"]
