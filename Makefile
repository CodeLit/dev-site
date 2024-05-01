up:
	make build
	make down
	docker-compose -f docker-compose.dev.yml -f docker-compose.yml up --remove-orphans --force-recreate

attach:
	docker-compose exec -it dev-site bash

logs:
	docker-compose logs

build:
	docker-compose build

down:
	docker-compose down

prod:
	make build
	make down
	docker-compose up -d --remove-orphans --force-recreate

pull:
	docker-compose pull

push:
	docker-compose push
