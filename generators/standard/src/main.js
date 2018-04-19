import Vue from 'vue'
import 'es6-promise'
import 'whatwg-fetch'
import Impression from 'vue-impression'
import router from './router/'
import store from './store'
import App from './app/app'

Vue.use(Impression)

/* eslint-disable no-new */
new Vue({
  el: '#root',
  router,
  store,
  render: h => h(App)
})
