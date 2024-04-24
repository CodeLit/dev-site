#!/bin/sh

cd /app/public || exit

# Copying node_modules and vendor in background and running php-fpm in parallel
cp -R /app/node_modules /app/vendor /shared & php-fpm
