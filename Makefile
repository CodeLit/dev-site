up:
	make down
	docker-compose -f docker-compose.dev.yml -f docker-compose.yml up --build --remove-orphans --force-recreate

restart:
	docker-compose restart

attach:
	docker-compose exec -it dev-site bash

logs:
	docker-compose logs --tail=100

build:
	docker-compose build

down:
	docker-compose down

prod:
	make down
	docker-compose up -d --build --remove-orphans --force-recreate

pull:
	docker-compose pull

push:
	docker-compose push
