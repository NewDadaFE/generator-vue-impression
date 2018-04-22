import Vue from 'vue'
import 'es6-promise'
import 'whatwg-fetch'
import ViewPortUnitBuggyfill from 'viewport-units-buggyfill'
import Impression from 'vue-impression'
import FastClick from 'fastclick'
import router from './router/'
import store from './store'
import App from './app/app'

// vue-impression component lib
Vue.use(Impression)
// fast-click
FastClick.attach(document.body)
// vw 单位buggyfill
ViewPortUnitBuggyfill.init()

if (module.hot) {
  module.hot.addStatusHandler(status => {
    if (status === 'ready') {
      ViewPortUnitBuggyfill.refresh()
    }
  })
}

/* eslint-disable no-new */
new Vue({
  el: '#root',
  router,
  store,
  render: h => h(App)
})
