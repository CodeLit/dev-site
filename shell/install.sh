#!/bin/sh
if ! command -v composer &> /dev/null
then
    # Composer is not installed, so let's download and install it
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
    # Node.js is not installed, so let's install it
    if ! command -v curl &> /dev/null
    then
        >&2 echo 'ERROR: Curl is not installed. Please install curl.'
        exit 1
    fi

    curl -sL https://deb.nodesource.com/setup_18.x | sudo -E bash -
    sudo apt-get install -y nodejs
fi
