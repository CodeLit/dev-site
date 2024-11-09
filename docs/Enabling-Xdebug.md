# Enabling Xdebug

**XDebug is really slows down application.
Use it only in hard cases,
and keep it turned off in production,
and in daily development.**

In `docker/PHP.dockerfile`, uncomment the lines below:

```yml
#    && pecl install xdebug \
#    && docker-php-ext-enable xdebug \
```

In `docker/php_xdebug.ini`, uncomment specified lines.

Run `task rebuild`.

In PHPStorm, open
`Settings -> PHP -> Servers`

```
ip: 0.0.0.0
port: 80
debugger: xdebug
path: /app
```

Enable `listening for PHP debug connections` in the top-right corner
