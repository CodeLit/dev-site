FROM node:lts-alpine as node

WORKDIR /app

RUN apk add --no-cache libpng-dev libjpeg libwebp-dev gcompat mesa-gl libxi

RUN npm install -g npm@latest
COPY package.json yarn.lock ./
RUN yarn install
COPY . .
RUN yarn prod

FROM composer:lts as composer

WORKDIR /app

COPY . .
RUN composer install

FROM alpine as app

WORKDIR /app

RUN apk update && apk add --no-cache bash

COPY --from=node /app/node_modules ./node_modules
COPY --from=node /app/public ./public
COPY --from=composer /app/vendor ./vendor

COPY . .

RUN chmod -R 777 ./bootstrap/cache/
RUN chmod -R 777 ./storage/

EXPOSE 9000
VOLUME [ "/app" ]

ENTRYPOINT ["bash", "./docker/entrypoint.sh"]
