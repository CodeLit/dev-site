@extends('base')

@section('content')
    <div id="app">
        <noscript>Пожалуйста, включите JavaScript на странице.</noscript>
        <b-nav />
        <router-view></router-view>
    </div>
@show
