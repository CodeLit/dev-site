FROM composer:lts as composer

WORKDIR /app

COPY composer.json composer.lock ./
RUN composer install --prefer-dist --no-scripts --no-autoloader
COPY database ./database
RUN composer install --prefer-dist --no-scripts
COPY . .
RUN composer install --prefer-dist

FROM node:lts-alpine as app

WORKDIR /app

RUN apk update && apk add --no-cache bash rsync

COPY package.json yarn.lock ./

RUN yarn install --production && yarn cache clean

COPY --from=composer /app/vendor ./vendor

COPY . .

EXPOSE 9000

ENTRYPOINT ["bash", "./docker/entrypoint.sh"]
