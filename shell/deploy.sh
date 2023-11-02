#!/bin/sh
script_dir=$(dirname "$(readlink -f "$0")")
cd "$script_dir/.." || exit
root_folder="$script_dir"/..
cd "$root_folder" || exit

composer install --no-dev --optimize-autoloader --no-interaction

yarn install
yarn production

# Reset user permissions after unsuccessful copy
# First, update your .env file from .env.example. Then:
# sudo find . -type d -exec chmod 755 {} \;
# sudo find . -type f -exec chmod 644 {} \;
# sudo find . -exec chown $(id -un):$(id -gn) {} \;
