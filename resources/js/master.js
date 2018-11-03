
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
import BootstrapVue from 'bootstrap-vue'
Vue.use(BootstrapVue);

// vue-router
import VueRouter from 'vue-router'
Vue.use(VueRouter);

// vform
import { Form, HasError, AlertError } from 'vform';
window.Form = Form;
Vue.component(HasError.name, HasError)
Vue.component(AlertError.name, AlertError)

// moment
import moment from 'moment';
moment.locale('ko');
Vue.filter('upText', function(text){
    return text.charAt(0).toUpperCase() + text.slice(1)
});
 Vue.filter('myDate',function(created){
    // return moment(created).format('MMMM Do YYYY, h:mm:ss a');
    return moment(created).format('ll');
});

Vue.component('aplayer-component', require('./components/util/PlayerComponent.vue'));
// vue router
let routes = [
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
