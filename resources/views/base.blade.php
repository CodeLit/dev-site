<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=1, initial-scale=1, maximum-scale=5, minimum-scale=1">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <meta name="description" content="{{__('common.meta_description')}}.">

    <title>{{__('common.blog_name')}}</title>

    {{-- Fonts--}}
    <link href="https://fonts.googleapis.com/css?family=Nunito:200,600" rel="stylesheet">

    {{-- Js and Css entrypoints --}}
    @vite('resources/js/app.js')

    {{-- Favicon --}}
    <link rel="icon" type="image/png" href="{{asset('/favicon/icon.png')}}">
</head>
<body>
<div id="app" style="height: 100vh;">
    <h3 style="display: inline-block">></h3>
    <div style="color: white; opacity: 0.09; margin-left: 10px; display: inline-block;">
        <h3>Vue.js Application</h3>
        Build of this application is not loaded.
        Please use yarn install and yarn run production to build the application.
    </div>
    <noscript>Please enable JavaScript on this page.</noscript>
</div>
</body>
</html>
