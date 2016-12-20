import Vue from 'vue';
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
