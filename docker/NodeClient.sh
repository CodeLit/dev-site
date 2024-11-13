#!/bin/bash

cd /app || exit

source .env

if [ "$APP_ENV" = "production" ]; then
    echo "Running in production mode"
    node /app/bootstrap/ssr/ssr.js
else
    yarn dev
fi
