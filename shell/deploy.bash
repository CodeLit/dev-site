#!/bin/sh
script_dir=$(dirname "$(readlink -f "$0")")
cd "$script_dir/.." || exit
root_folder="$script_dir"/..
cd "$root_folder" || exit

if [ ! -f .env ]; then
    cp .env.example .env
fi
docker-compose down
docker-compose pull
docker-compose up -d --remove-orphans
