# Updating SSL certificates
https://mindsers.blog/post/https-using-nginx-certbot-docker/
# First we remove the 443 port, certificates, and ssl-related stuff from laravel.conf
# Then we start nginx

# Create a certificate for the first time
docker compose run --rm  certbot certonly --webroot --webroot-path /var/www/certbot/ -d codelit.tk

# Certificate renewal every 3 months thereafter
docker compose run --rm certbot renew
