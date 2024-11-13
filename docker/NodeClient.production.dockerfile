# NodeClient.production.dockerfile
FROM node:lts-alpine

RUN apk add --no-cache bash

WORKDIR /app

COPY package.json yarn.lock ./

RUN yarn install --production && yarn cache clean

COPY . .

RUN yarn build

ENTRYPOINT ["bash", "./docker/NodeClient.sh"]
