FROM ubuntu:22.04

WORKDIR /app

RUN apt update
RUN apt install -y curl
RUN apt install -y nodejs
RUN apt install -y npm
RUN apt install -y libpng-dev
RUN apt install -y libtiff-dev
RUN apt install -y libjpeg-dev
RUN apt install -y libwebp-dev

COPY package*.json .

RUN npm install

COPY . .

CMD npm run watch


#!/usr/bin/env bash

#source .env
#
#if [ "$APP_ENV" == 'local' ]; then
#    npm run hot
#else
#    npm run prod
#fi
