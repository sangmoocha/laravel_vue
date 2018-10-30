<!doctype html>
<html lang="{{ app()->getLocale() }}">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>Laravel</title>

        <!-- Fonts -->
        <link href="https://fonts.googleapis.com/css?family=Nunito:200,600" rel="stylesheet" type="text/css">

        <!-- Styles -->
        <style>
            html, body {
                background-color: #fff;
                color: orangered;
                font-family: 'Nunito', sans-serif;
                font-weight: 200;
                height: 100vh;
                margin: 0;
            }

            .full-height {
                height: 100vh;
                text-align: center;
                background-image:url('/img/ivon.png');
                background-repeat:no-repeat;
                background-size: cover;
                background-color: black;
            }

            .flex-center {
                align-items: center;
                display: flex;
                justify-content: center;
            }

            .position-ref {
                position: relative;
            }

            .top-right {
                position: absolute;
                right: 10px;
                top: 18px;
                
            }
            
            .top-left{
                position: absolute;
                left: 10px;
                top: 18px;
            }
            
            .content {
                position: absolute;
                left: 30%;
                top: 25%;
                writing-mode: tb-rl;
            }

            .title {
                font-size: 3rem;
            }

            .links > a {
                color:dimgrey;
                padding: 0 25px;
                font-size: 12px;
                font-weight: 600;
                letter-spacing: .1rem;
                text-decoration: none;
                text-transform: uppercase;
            }

            .m-b-md {
                margin-bottom: 30px;
            }
            @media (max-width: 768px) {
                .top-left, .content {
                    display: none;
                }
            }
        </style>
    </head>
    <body>
        <div class="flex-center position-ref full-height">
            <div class="top-left links">
                <a href="https://laravel.com/docs" target="_sub">Laraval 문서</a>
                <a href="https://laracasts.com" target="_sub">Laracasts</a>
                <a href="https://laravel-news.com" target="_sub">News</a>
                <a href="https://github.com/sangmoocha/laravel_vue" target="_sub">GitHub</a>
            </div>
            @if (Route::has('login'))
                <div class="top-right links">
                    @auth
                        <a href="{{ url('/home') }}">Home</a>
                    @else
                        <a href="{{ route('login') }}">Login</a>
                        <a href="{{ route('register') }}">Register</a>
                    @endauth
                </div>
            @endif

            <div class="content">
                <div class="title m-b-md">
                    <p>實習室 <br>
                    Laravel Vue</p> 
                </div>
            </div>
        </div>
    </body>
</html>
