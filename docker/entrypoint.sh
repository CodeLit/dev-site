#!/bin/bash

cd /app || exit

# Copying node_modules and vendor to shared folder
# From easy to copy to hard
rsync -ahrvmP --remove-source-files /app/public /app/node_modules /app/vendor /shared
rsync -ahrvmP --remove-source-files /app/resources/views/layout/* /shared/resources/views/layout

bash
