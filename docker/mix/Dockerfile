FROM --platform=linux/x86_64 node:18-alpine

EXPOSE 35729

RUN apk update
RUN apk --no-cache add bash curl libpng-dev libjpeg libwebp-dev gcompat mesa-gl libxi
RUN npm install -g npm@latest

WORKDIR /app

COPY package.json yarn.lock ./

COPY . .

RUN ["bash", "shell/install.bash"]
CMD ["bash", "shell/build.bash"]
