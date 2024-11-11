# NodeClient.local.dockerfile
FROM node:lts-alpine

RUN apk add --no-cache bash

WORKDIR /app

COPY package.json yarn.lock ./

RUN yarn install

COPY . .

ENTRYPOINT ["bash", "./docker/NodeClient.sh"]
