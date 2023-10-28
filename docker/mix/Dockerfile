FROM --platform=linux/x86_64 node:18-alpine

RUN apk update
RUN apk --no-cache add bash curl libpng-dev libjpeg libwebp-dev gcompat mesa-gl libxi

WORKDIR /mix

COPY package.json yarn.lock ./

RUN yarn install

COPY . .

EXPOSE 35729

CMD ["sh", "./docker/mix/start.sh"]
