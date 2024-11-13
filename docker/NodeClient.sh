#!/bin/bash

cd /app || exit

source .env

if [ "$APP_ENV" = "production" ]; then
    echo "Running in production mode"
    rm -f /app/public/hot
    node /app/bootstrap/ssr/ssr.js
else
    rm -rf /app/public/build
    yarn dev
fi
