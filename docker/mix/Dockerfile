FROM php:8.2-alpine

WORKDIR /app

RUN apk update
RUN apk add --no-cache nodejs npm yarn curl git bash libpng-dev libjpeg gcompat mesa-gl libxi
RUN npm install -g npm@latest

RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer

COPY . .

# We won't build in mounted folder until the container starts.
# Build after, to avoid creating empty volumes.
CMD ["bash", "shell/build.sh"]

EXPOSE 35729