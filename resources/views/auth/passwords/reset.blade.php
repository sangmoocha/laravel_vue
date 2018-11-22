@extends('layouts.app')

@section('content')

<div class="content auth-img">
    <div class="box">
        <div class="top-right links">
            <a href="{{ url('/') }}"><i class="fas fa-times fa-2x"></i></a>
        </div>
        <div class="header">
            <h4>{{ __('비밀번호 변경') }}</h4>
        </div>
        <form method="POST" action="{{ route('password.update') }}">
            <div class="body">
                @csrf
                <input type="hidden" name="token" value="{{ $token }}">
                <div class="form-group row">
                    <div class="input-group mb-3">
                        <div class="input-group-prepend">
                            <span class="input-group-text"><i class="fas fa-envelope"></i></span>
                        </div>
                        <input id="email" 
                                type="email" 
                                class="form-control{{ $errors->has('email') ? ' is-invalid' : '' }}" 
                                name="email" value="{{ $email ?? old('email') }}" 
                                placeholder="이메일" 
                                required autofocus>
                        @if ($errors->has('email'))
                            <span class="invalid-feedback" role="alert">
                                <strong>{{ $errors->first('email') }}</strong>
                            </span>
                        @endif
                    </div>
                </div>
                <div class="form-group row">
                    <div class="input-group mb-3">
                        <div class="input-group-prepend">
                            <span class="input-group-text" ><i class="fas fa-unlock-alt"></i></span>
                        </div>
                        <input id="password" 
                                type="password" 
                                class="form-control{{ $errors->has('password') ? ' is-invalid' : '' }}" 
                                name="password" 
                                placeholder="비밀번호" 
                                required>
                        @if ($errors->has('password'))
                            <span class="invalid-feedback" role="alert">
                                <strong>{{ $errors->first('password') }}</strong>
                            </span>
                        @endif
                    </div>
                </div>
                <div class="form-group row">
                    <div class="input-group mb-3">
                        <div class="input-group-prepend">
                            <span class="input-group-text" ><i class="fas fa-unlock-alt"></i></span>
                        </div>
                        <input id="password" 
                                type="password" 
                                class="form-control{{ $errors->has('password') ? ' is-invalid' : '' }}" 
                                name="password" 
                                placeholder="비밀번호 재확인" 
                                required>
                    </div>
                </div>
                <div class="form-group row mb-0 float-right">
                    <button type="submit" class="btn btn-primary">
                        {{ __('저장') }}
                    </button>
                </div>
            </div>
        </form>
    </div>
</div>
@endsection
