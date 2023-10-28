#!/bin/bash
script_dir=$(dirname "$(readlink -f "$0")")
cd "$script_dir/.." || exit
root_folder="$script_dir"/..
cd "$root_folder" || exit
if ! npm list -g yarn >/dev/null 2>&1; then # if there is no yarn npm package
	npm install --global yarn
fi
yarn install
yarn production
