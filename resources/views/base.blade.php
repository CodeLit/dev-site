<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

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
    <script type="module" src="https://unpkg.com/ionicons@5.4.0/dist/ionicons/ionicons.esm.js"></script>

    @env('local')
        {{-- Livereload --}}
        <script src="http://localhost:35729/livereload.js"></script>
    @endenv

</head>

<body>

    @yield('content')

</body>

</html>
