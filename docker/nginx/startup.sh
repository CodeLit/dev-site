#!/bin/bash

if [ ! -f /etc/nginx/ssl/live/codelit.tk/fullchain.pem ]; then
    mkdir -p /etc/nginx/ssl/live/codelit.tk
    openssl genrsa -out /etc/nginx/ssl/live/codelit.tk/privkey.pem 2048
    openssl req -new -x509 -subj "/C=US/ST=Denial/L=Springfield/O=Dis/CN=codelit.tk" -key /etc/nginx/ssl/live/codelit.tk/privkey.pem -out /etc/nginx/ssl/live/codelit.tk/fullchain.pem
fi



# cron job to restart nginx every 6 hour
(crontab -l ; echo "0 0 */4 * * nginx -s reload") | crontab -

# Start crond in background
crond -l 2 -b

#* * * * * root nginx -s reload >> /var/log/cron.log

# Start nginx in foreground
echo "NGINX started, daemon will restart every 6 hours now.";

nginx
