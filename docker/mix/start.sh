#!/bin/bash

if [ "$MIX_WATCH_ON" == 'true' ]; then npm run watch; else npm run prod; fi
