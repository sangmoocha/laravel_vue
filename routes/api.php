<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
| 다음은 애플리케이션에 API 경로를 등록 할 수있는 곳입니다. 이러한 경로는 
| "api" 미들웨어 그룹에 할당 된 그룹 내의 RouteServiceProvider에 의해 
| 로드됩니다.
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});


Route::apiResources([
    'user' => 'API\UserController'
]);