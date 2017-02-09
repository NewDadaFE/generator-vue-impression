import Vue from 'vue';
import VueResource from 'vue-resource';
import App from './views';

Vue.use(VueResource);

/* eslint-disable no-new */
new Vue({
    el: '#app',
    ...App,
});
