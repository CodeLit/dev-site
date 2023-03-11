FROM node:18-alpine3.16

WORKDIR /app

RUN apk update
RUN apk --no-cache add bash curl libpng-dev libjpeg libwebp-dev gcompat mesa-gl libxi
RUN npm install -g npm@latest

COPY package.json .
COPY yarn.lock .

RUN yarn install

COPY --chown=node . .

CMD if [ "$APP_ENV" == 'local' ]; then npm run watch; else npm run prod; fi
