@extends('layouts.app')

@section('content')
<div class="container">
    <div class="row justify-content-center">
        <div class="col-md-8">
            <div class="card">
                <div class="card-header">{{ __('확인 메일 발송') }}</div>

                <div class="card-body">
                    @if (session('resent'))
                        <div class="alert alert-success" role="alert">
                            {{ __('등록한 이메일 주소로 새로운 확인 링크가 발송되었습니다.') }}
                        </div>
                    @endif

                    {{ __('계속하기 전에 이메일에서 확인 링크를 클릭 하십시오.') }}
                    {{ __('이메일을받지 못한 경우') }}, <a href="{{ route('verification.resend') }}">{{ __('다시 요청하려면 여기를 클릭 하십시오.') }}</a>.
                </div>
            </div>
        </div>
    </div>
</div>
@endsection
