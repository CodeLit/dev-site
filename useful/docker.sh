# Удалить и остановить все контейнеры
docker stop $(docker ps -q) /
docker container prune -f

# Очистить кеш докера
docker builder prune -f

docker-compose up --build -d


# test 80 port:
docker run -d --rm --name web-test -p 80:8000 crccheck/hello-world
