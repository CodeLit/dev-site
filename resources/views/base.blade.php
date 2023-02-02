<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">

    <title>{{__('common.blog_name')}}</title>

    {{-- Favicons--}}
    @if(view()->exists('layout.favicon'))
        @include('layout.favicon')
    @endif


    {{-- Fonts--}}
    <link href="https://fonts.googleapis.com/css?family=Nunito:200,600" rel="stylesheet">

    {{-- Css --}}
    <link href="/build/css/app.css" rel="stylesheet">

    {{-- Js --}}
    <script src="/build/js/app.js"></script>

    {{-- Icons --}}
    <script defer type="module" src="https://unpkg.com/ionicons@5.4.0/dist/ionicons/ionicons.esm.js"></script>

    @env('local')
        {{-- Livereload --}}
        <script src="http://localhost:35729/livereload.js"></script>
    @endenv

</head>
<body>
<div id="app">
    <noscript>Пожалуйста, включите JavaScript на странице.</noscript>
</div>
</body>
</html>
