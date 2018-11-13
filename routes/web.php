<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
| 
| 여기에 애플리케이션을 위한 웹 경로를 등록 할 수있는 곳이 있습니다.
| 이 경로는 "web" 미들웨어 그룹을 포함하는 그룹 내의 RouteServiceProvider에
| 의해 로드됩니다.
|
*/

Route::get('/', function () {
    return view('welcome');
});

Auth::routes();

Route::get('/home', 'HomeController@index')->name('home');

Route::get('{path}',"HomeController@index")->where( 'path', '([A-z\d-\/_.]+)?' );