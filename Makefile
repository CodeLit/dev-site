up:
	docker-compose up -d --build --force-recreate --remove-orphans

attach:
	docker-compose exec -it dev-site bash

logs:
	docker-compose logs -f

build:
	docker-compose build

down:
	docker-compose down

prod:
	if [ ! -f .env ]; then cp .env.example .env; fi
	sudo chmod -R 777 bootstrap/cache storage/
	docker-compose up -d --remove-orphans
