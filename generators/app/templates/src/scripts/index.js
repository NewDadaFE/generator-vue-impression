import Vue from 'vue';
import 'es6-promise';
import 'whatwg-fetch';
import router from './router';
import App from './App';
import store from './store';

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    store,
    ...App,
});
