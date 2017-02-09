import Vue from 'vue';
import 'es6-promise';
import 'whatwg-fetch';
import router from './router';

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    template: '<router-view></router-view>',
});
