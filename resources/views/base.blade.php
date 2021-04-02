<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title>Блог CodeLit</title>

    <!-- Fonts -->
    <link href="https://fonts.googleapis.com/css?family=Nunito:200,600" rel="stylesheet">

    {{-- css --}}
    <link href="/css/app.css" rel="stylesheet">

    {{-- js --}}
    <script src="/js/app.js"></script>

    {{-- livereload --}}
    @env('local')
    <script src="http://localhost:35729/livereload.js"></script>
    @endenv
</head>

<body>

    @yield('content')

</body>

</html>
