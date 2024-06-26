<?php

use GuzzleHttp\Client;
use Illuminate\Support\Facades\Route;

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

Route::get('/{any}', function () {
    return view('base');
})->where( 'any', '.*')->name('gateway');
