<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=1, initial-scale=1, maximum-scale=5, minimum-scale=1">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <meta name="description" content="{{__('common.meta_description')}}.">

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
    <script src="/build/js/app.js" type="text/javascript"></script>

    {{-- Icons --}}
    <script defer type="module" src="https://unpkg.com/ionicons@5.4.0/dist/ionicons/ionicons.esm.js"></script>

</head>
<body>
<div id="app">
    <h1>Vue.js Application</h1>
    Build of this application is not loaded.
    Please use yarn install and yarn run production to build the application.
    <noscript>Please enable JavaScript on this page.</noscript>
</div>
</body>
</html>
