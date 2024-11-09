# NodeClient.production.dockerfile
FROM node:lts-alpine

RUN apk add --no-cache bash

WORKDIR /app

COPY package.json yarn.lock ./

RUN yarn install --production --frozen-lockfile && yarn cache clean

COPY . .

ENTRYPOINT ["bash", "./docker/NodeClient.sh"]
