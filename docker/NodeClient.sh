#!/bin/bash

cd /app || exit

source .env

if [ "$APP_ENV" = "production" ]; then
    rm -f /app/hot
    yarn prod
else
    rm -rf /app/build
    yarn dev
fi
