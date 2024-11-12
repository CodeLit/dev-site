#!/bin/bash

cd /app || exit

source .env

php artisan storage:link -q

# Waiting for MySQL availability
dockerize -wait tcp://mysql:3306 -timeout 30s -wait-retry-interval 500ms

php artisan migrate --no-interaction --force &

echo "Running in $APP_ENV mode"

# Fix rights on production
chown -R www-data:www-data /app/storage /app/bootstrap/cache
chmod -R 775 /app/storage /app/bootstrap/cache

if [ "$APP_ENV" != "production" ]; then
    php artisan serve --host=0.0.0.0 --port=80
else
    exec php-fpm
fi
