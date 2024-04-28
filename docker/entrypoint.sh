#!/bin/bash

cd /app || exit

# Copying node_modules and vendor to shared folder
# From easy to copy to hard
rsync -rv /app/public /app/node_modules /app/vendor /shared
rsync -rv /app/resources/views/layout/* /shared/resources/views/layout

bash
