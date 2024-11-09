<?php

use GuzzleHttp\Client;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/
Route::get('/', function () {
    return Inertia::render('HomePage');
})->name('home');

Route::get('/my-works', function () {
    return Inertia::render('MyProjects');
})->name('my-works');

Route::get('/documents', function () {
    return Inertia::render('Documents');
})->name('documents');

Route::get('/ping', function () {
    return response('pong', 200);
});

Route::get('/iframe-redirect', function () {
    $url = request()->get('url');
    $client = new Client();
    $res = $client->get($url);
    if (empty($url)) abort(404);
    return $res->getBody();
});
