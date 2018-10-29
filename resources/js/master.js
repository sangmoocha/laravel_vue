
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
Vue.use(BootstrapVue)

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 * 
 * 다음으로, 새로운 Vue 애플리케이션 인스턴스를 생성하고 페이지에 첨부합니다. 
 * 그런 다음이 애플리케이션에 구성 요소를 추가하거나 고유 한 필요에 맞게 
 * JavaScript 스 캐 폴딩을 사용자 정의 할 수 있습니다.
 * 
 */

Vue.component('example-component', require('./components/ExampleComponent.vue'));

const app = new Vue({
    el: '#app'
});
