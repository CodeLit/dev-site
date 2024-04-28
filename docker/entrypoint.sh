#!/bin/bash

cd /app || exit

source .env

# Copying node_modules and vendor to shared folder in background
# From easy to copy to hard. -v to show verbose output
rsync -ahr /app/public /app/node_modules /app/vendor /shared &

# If APP_ENV=local run Vite in dev mode
if [ "$APP_ENV" = "local" ]; then
    bun install
    bun dev
else
    bun prod
fi

bash
