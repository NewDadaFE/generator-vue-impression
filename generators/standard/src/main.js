import Vue from 'vue'
import 'es6-promise'
import 'whatwg-fetch'
import impression from 'vue-impression'
import router from './router/'
import store from './store'
import App from './app/app'

Vue.use(impression)

/* eslint-disable no-new */
new Vue({
  el: '#root',
  router,
  store,
  ...App
})
