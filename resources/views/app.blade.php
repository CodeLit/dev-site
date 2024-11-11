<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <title inertia>{{__('common.blog_name')}}</title>
    <meta charset="utf-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=1, initial-scale=1, maximum-scale=5, minimum-scale=1">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <meta name="description" content="{{__('common.meta_description')}}.">


    {{-- Fonts--}}
    <link href="https://fonts.googleapis.com/css?family=Nunito:200,600" rel="stylesheet">

    {{-- Ziggy JS routes --}}
    @routes

    {{-- Js and Css entrypoints --}}
    @vite('resources/js/app.js')

    @inertiaHead
</head>
<body>
    <noscript>Please enable JavaScript on this page.</noscript>
    @inertia('app')
    @yield('content')
    @yield('scripts')
    <style>
        html:not([data-theme]) {
            background-color: #D9F6FF;
        }

        @media (prefers-color-scheme: dark) {
            html:not([data-theme]) {
                background-color: rgb(35, 141, 148);
            }
        }
    </style>
</body>
</html>
