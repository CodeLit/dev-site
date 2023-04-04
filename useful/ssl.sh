# Обновление сертификатов SSL
https://mindsers.blog/post/https-using-nginx-certbot-docker/
# Сперва убираем из laravel.conf 443 порт, сертификаты, и всё что связанно с ssl
# Запускаем nginx

# Создать сертификат в первый раз
docker compose run --rm  certbot certonly --webroot --webroot-path /var/www/certbot/ -d codelit.tk

# Последующее обновление сертификата каждые 3 месяца
docker compose run --rm certbot renew
