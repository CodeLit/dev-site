#!/bin/sh
export DEBIAN_FRONTEND=noninteractive
sudo apt update

# Check if the 'php' command is available
if ! command -v php &> /dev/null; then
    sudo add-apt-repository ppa:ondrej/php -y
    sudo apt install -y php8.2-fpm php8.2-common
fi

if ! command -v composer &> /dev/null
then
    EXPECTED_SIGNATURE="$(wget -q -O - https://composer.github.io/installer.sig)"
    php -r "copy('https://getcomposer.org/installer', 'composer-setup.php');"
    ACTUAL_SIGNATURE="$(php -r \"echo hash_file('sha384', 'composer-setup.php');\")"

    if [ "$EXPECTED_SIGNATURE" != "$ACTUAL_SIGNATURE" ]
    then
        >&2 echo 'ERROR: Composer installer signature mismatch'
        rm composer-setup.php
        exit 1
    fi

    php composer-setup.php --quiet
    RESULT=$?
    rm composer-setup.php
    echo $RESULT
fi

if ! command -v node &> /dev/null
then
    curl -sL https://deb.nodesource.com/setup_18.x | sudo -E bash -
    sudo apt-get install -y nodejs
fi
