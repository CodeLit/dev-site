up:
	docker-compose up --build --force-recreate --remove-orphans

down:
	docker-compose down

prod:
	docker-compose up -d --build --force-recreate --remove-orphans
