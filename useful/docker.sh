# Delete and stop all containers
docker stop $(docker ps -q) /
docker container prune -f

# Clear docker cache
docker builder prune -f

docker-compose up --build -d


# test 80 port:
docker run -d --rm --name web-test -p 80:8000 crccheck/hello-world
