<?php

use GuzzleHttp\Client;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;


Route::get('/', function () {
    return Inertia::render('HomePage');
})->name('home');

Route::get('/my-works', function () {
    return Inertia::render('MyProjectsPage');
})->name('my-works');

Route::get('/documents', function () {
    return Inertia::render('DocumentsPage');
})->name('documents');

Route::get('/ping', function () {
    return response('pong', 200);
})->name('ping');

Route::get('/iframe-redirect', function () {
    $url = request()->get('url');
    $client = new Client();
    $res = $client->get($url);
    if (empty($url)) abort(404);
    return $res->getBody();
});
