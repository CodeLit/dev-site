#!/bin/sh
script_dir=$(dirname "$(readlink -f "$0")")
cd "$script_dir/.." || exit
root_folder="$script_dir"/..
cd "$root_folder" || exit

source .env
if [ ! "$APP_KEY" ]; then
    php artisan key:generate --ansi
fi
