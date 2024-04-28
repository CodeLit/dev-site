## My beautiful website project

This is a home project to demonstrate the techniques I have learned.

[//]: # (<p align="center">)

[//]: # (<img src="https://codelit.win/favicon/android-chrome-512x512.png" width="400">)

[//]: # (</p>)

<p>
<a href="https://github.com/CodeLit/dev_site/actions"><img src="https://github.com/CodeLit/dev_site/workflows/Host-deploy/badge.svg" alt="Build Status"></a>
</p>

Please enjoy your stay!

## Technologies used

- `Laravel PHP framework`
- `Vue.js`
- `Tailwind.js`
- `Scss`
- `Webpack (laravel mix)`
- `Docker, docker compose`

## Dev env launch

### Manual

- Install PHP 8.2, Composer, Node LTS, yarn
- Run `composer install`
- Run `yarn install`
- Run `yarn run watch`
- Use php web server to run `public/index.php` file

### Using Docker container

```
docker-compose up --build -d
```

```sh
# Open hosts file in editor
code C:/Windows/System32/Drivers/etc/hosts
# And add:
127.0.0.1 codelit.local
127.0.0.1 dev-site.local
```

Open in browser:
[http://codelit.local](http://codelit.local)
or
[http://dev-site.local](http://dev-site.local)
