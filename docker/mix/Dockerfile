FROM php:8.2-alpine

WORKDIR /build

RUN apk update
RUN apk add --no-cache nodejs npm yarn curl git bash libpng-dev libjpeg libwebp-dev gcompat mesa-gl libxi
RUN npm install -g npm@latest

RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer

COPY package.json yarn.lock .

RUN yarn install

COPY . .

# Run both yarn install and composer install in parallel
RUN (yarn production & composer install) \
    && wait

# We won't copy in mounted folder until the container starts.
# Otherwise, the mounted folder will be empty.
# Copy after, to avoid creating empty volumes.
# Also we set a APP_USER variable inside the docker-compose.yml to avoid copying as root.
CMD ["bash", "shell/copy-to-volume.sh"]

EXPOSE 35729
