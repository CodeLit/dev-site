#!/bin/bash

cd /app || exit

# Copying node_modules and vendor in background and running php-fpm in parallel
cp -R /app/node_modules /app/vendor /shared

bash
