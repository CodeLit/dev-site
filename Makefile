up:
	docker-compose -f docker-compose.yml -f docker-compose-dev.yml up -d --build --force-recreate --remove-orphans

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
	docker-compose up -d --remove-orphans
