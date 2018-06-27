
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');
import axios from 'axios';
// import Datepicker from 'vuejs-datepicker';

window.Vue = require('vue');
window.axios = axios;

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

// Vue.component('example-component', require('./components/ExampleComponent.vue'));
// Vue.component('articles-component', require('./components/ArticlesComponent.vue'));

// Vue.component('navbar-component', require('./components/NavbarComponent.vue')); 
// if navbar component is used first in the page then it should be declared before other components, else there will be uncaught resource error found
// Vue.component('task-component', require('./components/TaskComponent.vue'));

import TaskComponent from './components/TaskComponent.vue';
// import NavbarComponent from './components/TaskComponent.vue';
// import ArticlesComponent from './components/TaskComponent.vue';
import CurrentTaskComponent from './components/CurrentTaskComponent.vue';
import ArchivedTaskComponent from './components/ArchivedTaskComponent.vue';

import VueRouter from 'vue-router';
window.Vue.use(VueRouter);




//defining routes
const routes = [
    {
        path: '/',
        components: TaskComponent,
        name: 'TaskComponent'
    },
    {path: '/current-tasks', component: CurrentTaskComponent, name: 'CurrentTaskComponent'},
    {path: '/archived-tasks', component: ArchivedTaskComponent, name: 'ArchivedTaskComponent'},
]

const router = new VueRouter({ routes })

const app = new Vue({ router }).$mount('#app')

// const app = new Vue({
//     el: '#app'
// });

// const date_picker = new Vue({
//     el: '#date_picker',

//     components: {
//         Datepicker
//     },

//     data: {
//         date: new Date()
//     }
// });