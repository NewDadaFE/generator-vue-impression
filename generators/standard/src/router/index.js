import Vue from 'vue'
import VueRouter from 'vue-router'
import BookView from '../modules/book/view'

Vue.use(VueRouter)

// 路由配置
const routes = [
  {
    path: '/',
    component: BookView
  }
]

export default new VueRouter({ routes })
