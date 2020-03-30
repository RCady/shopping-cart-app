<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::apiResource('products', 'ProductController')->only(['index', 'show']);
Route::apiResource('cart', 'CartController')->only(['show', 'store']);
Route::post('/cart/{cart}/item', 'CartController@addItemToCart');
Route::put('/cart/{cart}/item/{cartItem}', 'CartController@updateCartItem');
Route::delete('/cart/{cart}/item/{cartItem}', 'CartController@deleteCartItem');
