import Vue from 'vue'
import 'es6-promise'
import 'whatwg-fetch'
import Impression from 'vue-impression'
import FastClick from 'fastclick'
import router from './router/'
import store from './store'
import App from './app/app'

Vue.use(Impression)
FastClick.attach(document.body)

/* eslint-disable no-new */
new Vue({
  el: '#root',
  router,
  store,
  render: h => h(App)
})
