#!/usr/bin/env bash

source .env

if [ "$APP_ENV" == 'local' ]; then
    npm run watch
else
    npm run prod
fi
