### Setup on local machine

- Install [Node.js LTS](https://nodejs.org/en/)

```bash
npm install -g yarn
yarn install
```

- Install [PHP](https://secure.php.net/downloads.php) of version presented in [composer.json](../composer.json) file.
- Install [Composer](https://getcomposer.org)

```bash
composer install
```

- Create the database
- Check the `.env` file variables
- Run `php artisan key:generate --ansi`
- Run `php artisan serve`
- Run `yarn dev`
