<?php

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

Route::get('/', function () {
    return view('site');
});

Route::get('/iframe-redirect', function () {
    $url = request()->get('url');
    if (empty($url)) abort(404);
    return redirect($url);
});

Route::get('/{any}', function () {
    return view('site');
})->where( 'any', '.*')->name('gateway');
