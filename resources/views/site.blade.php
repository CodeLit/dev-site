@extends('base')

@section('content')
    <div id="app">

        <noscript>Пожалуйста, включите JavaScript на странице.</noscript>

        <b-app />

    </div>

    {{-- <div class="flex-center position-ref full-height">
        @if (Route::has('login'))
            <div class="top-right links">
                @auth
                    <a href="{{ url('/home') }}">Home</a>
                @else
                    <a href="{{ route('login') }}">Login</a>

                    @if (Route::has('register'))
                        <a href="{{ route('register') }}">Register</a>
                    @endif
                @endauth
            </div>
        @endif



    </div> --}}
@show
