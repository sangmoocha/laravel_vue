
window._ = require('lodash');
window.Popper = require('popper.js').default;

/**
 * We'll load jQuery and the Bootstrap jQuery plugin which provides support
 * for JavaScript based Bootstrap features such as modals and tabs. This
 * code may be modified to fit the specific needs of your application.
 * 
 * 우리는 jQuery와 모달과 탭 같은 자바 스크립트 기반 부트 스트랩 기능을 
 * 지원하는 부트 스트랩 jQuery 플러그인을로드 할 것이다. 이 코드는 응용 
 * 프로그램의 특정 요구 사항에 맞게 수정할 수 있습니다.
 * 
 */

try {
    window.$ = window.jQuery = require('jquery');

    require('bootstrap');
    // admin-lte 추가
    require('admin-lte');
} catch (e) {}

/**
 * We'll load the axios HTTP library which allows us to easily issue requests
 * to our Laravel back-end. This library automatically handles sending the
 * CSRF token as a header based on the value of the "XSRF" token cookie.
 * 
 * Axis HTTP 라이브러리를로드하면 Laravel 백엔드에 요청을 쉽게 보낼 수 있습니다. 
 * 이 라이브러리는 "XSRF"토큰 쿠키 값을 기반으로 CSRF 토큰을 헤더로 자동 전송합니다.
 * 
 */

window.axios = require('axios');

window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

/**
 * Next we will register the CSRF Token as a common header with Axios so that
 * all outgoing HTTP requests automatically have it attached. This is just
 * a simple convenience so we don't have to attach every token manually.
 * 
 * 다음으로 CSRF 토큰을 Axios에 공통 헤더로 등록하여 모든 발신 HTTP 요청에 
 * 자동으로 첨부합니다. 이것은 단순한 편리함이므로 모든 토큰을 수동으로 부착 
 * 할 필요가 없습니다.
 * 
 */

let token = document.head.querySelector('meta[name="csrf-token"]');

if (token) {
    window.axios.defaults.headers.common['X-CSRF-TOKEN'] = token.content;
} else {
    console.error('CSRF token not found: https://laravel.com/docs/csrf#csrf-x-csrf-token');
}

/**
 * Echo exposes an expressive API for subscribing to channels and listening
 * for events that are broadcast by Laravel. Echo and event broadcasting
 * allows your team to easily build robust real-time web applications.
 * 
 * Echo는 채널을 구독하고 Laravel에서 방영되는 이벤트를 수신하기위한 표현형 
 * API를 제공합니다. 에코 및 이벤트 브로드 캐스팅을 사용하면 팀에서 강력한 
 * 실시간 웹 응용 프로그램을 쉽게 구축 할 수 있습니다.
 * 
 */

// import Echo from 'laravel-echo'

// window.Pusher = require('pusher-js');

// window.Echo = new Echo({
//     broadcaster: 'pusher',
//     key: process.env.MIX_PUSHER_APP_KEY,
//     cluster: process.env.MIX_PUSHER_APP_CLUSTER,
//     encrypted: true
// });
