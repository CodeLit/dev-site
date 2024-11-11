#!/bin/bash

cd /app || exit

source .env

php artisan storage:link -q

dockerize -wait tcp://mysql:3306 -timeout 30s -wait-retry-interval 500ms

php artisan migrate --no-interaction --force &

if [ "$APP_ENV" != "production" ]; then
    php artisan serve --host=0.0.0.0 --port=80 &
else
    echo "Running in production mode" &
fi

# Wait for background process to exit
wait -n
