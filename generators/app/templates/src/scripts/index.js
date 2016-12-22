import Vue from 'vue';
import 'es6-promise';
import 'whatwg-fetch';
import impression from 'vue-impression';
import router from './router';
import App from './App';
import store from './store';

Vue.use(impression);

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    store,
    ...App,
});
