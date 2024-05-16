#!/bin/bash

cd /app || exit

source .env

if [ "$APP_ENV" = "production" ]; then
   yarn prod
   rsync -ahr /app/public/build /shared/public
fi

# Copying node_modules and vendor to shared folder in background
# From easy to copy to hard. -v to show verbose output
rsync -ahr /app/node_modules /app/vendor /shared &

# If APP_ENV=local run Vite in dev mode
if [ "$APP_ENV" = "production" ]; then
    rm -f /shared/public/hot
    # bash
else
    yarn # Install dev dependencies
    rm -rf /shared/public/build
    bun dev
fi


