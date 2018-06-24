import 'src/app/styles/index.scss'
import 'src/app/utils/polyfill'
import Vue from 'vue'
import App from 'src/app/containers/App'
import router from './router'
import store from './store'

// eslint-disable-next-line
new Vue({ ...App, router, store }).$mount('#app')
