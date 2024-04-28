#!/bin/bash

cd /app || exit

# Copying node_modules and vendor to shared folder
# From easy to copy to hard
rsync -ahrvP --remove-source-files /app/public /app/node_modules /app/vendor /shared

bash
