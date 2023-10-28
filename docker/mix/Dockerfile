FROM --platform=linux/x86_64 node:18-alpine3.16

RUN apk update
RUN apk --no-cache add bash curl libpng-dev libjpeg libwebp-dev gcompat mesa-gl libxi
RUN npm install -g npm@latest

WORKDIR /mix

CMD ["sh", "./docker/mix/start.sh"]
