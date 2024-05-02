#!/bin/bash

cd /app || exit

source .env

if [ "$APP_ENV" = "production" ]; then
   bun prod
fi

# Copying node_modules and vendor to shared folder in background
# From easy to copy to hard. -v to show verbose output
rsync -ahr /app/public /app/node_modules /app/vendor /shared &

# If APP_ENV=local run Vite in dev mode
if [ "$APP_ENV" = "local" ]; then
    bun install --frozen-lockfile --dev # install dev dependencies
    rm -rf /shared/public/build
    bun dev
else
    rm -f /shared/public/hot
fi

bash
