#!/bin/bash
script_dir=$(dirname "$(readlink -f "$0")")
cd "$script_dir/.." || exit
root_folder="$script_dir"/..
cd "$root_folder" || exit

if [ "$MIX_WATCH_ON" == "true" ]; then
    yarn watch
else
    yarn production
fi
