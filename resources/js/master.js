
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 * 
 * 먼저 Vue와 다른 라이브러리를 포함하는이 프로젝트의 JavaScript 의존성을 
 * 모두로드 할 것입니다. Vue와 Laravel을 사용하여 강력하고 강력한 웹 응용
 * 프로그램을 구축 할 때 가장 좋은 출발점입니다.
 * 
 */

require('./bootstrap');

window.Vue = require('vue');

// bootstrap-vue
import BootstrapVue from 'bootstrap-vue';
Vue.use(BootstrapVue);

// vue-router
import VueRouter from 'vue-router';
Vue.use(VueRouter);

// vform
import { Form, HasError, AlertError } from 'vform';
window.Form = Form;
Vue.component(HasError.name, HasError);
Vue.component(AlertError.name, AlertError);

// VueProgressBar
import VueProgressBar from 'vue-progressbar';
Vue.use(VueProgressBar, {
  color: 'rgb(143, 255, 199)',
  failedColor: 'red',
  height: '2px'
});

// ES6 Modules or TypeScript
import swal from 'sweetalert2';
window.swal = swal;
// CommonJS
window.swal = require('sweetalert2');
const toast = swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 3000
});
window.toast = toast;

// aplayer component 
Vue.component('aplayer-component', require('./components/util/PlayerComponent.vue'));

// laravel-vue-pagination
Vue.component('pagination', require('laravel-vue-pagination'));

// passport
Vue.component(
    'passport-clients',
    require('./components/passport/Clients.vue')
);

Vue.component(
    'passport-authorized-clients',
    require('./components/passport/AuthorizedClients.vue')
);

Vue.component(
    'passport-personal-access-tokens',
    require('./components/passport/PersonalAccessTokens.vue')
);
// .......................................................... //
// vue router
let routes = [
    { path: '/home', component: require('./components/HomeComponent.vue') },
    { path: '/OAuth', component: require('./components/auth/OAuthComponent.vue') },
    { path: '/profile', component: require('./components/auth/ProfileComponent.vue') },
	{ path: '/users', component: require('./components/auth/UsersComponent.vue') },
]

const router = new VueRouter({
    mode: 'history',
    routes // `routes: routes`의 줄임
})

const app = new Vue({
    el: '#app',
    router,
});
