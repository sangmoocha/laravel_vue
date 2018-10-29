const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 | 
 | Mix는 Laravel 응용 프로그램의 Webpack 빌드 단계를 정의 할 수있는 깨끗하고 
 | 유창한 API를 제공합니다. 기본적으로 모든 JS 파일을 묶을뿐만 아니라 
 | 애플리케이션의 Sass 파일을 컴파일합니다.
 |
 */

mix.js('resources/js/app.js', 'public/js')
   .js('resources/js/master.js', 'public/js')
   .sass('resources/sass/app.scss', 'public/css')
   .sass('resources/sass/master.scss', 'public/css');
