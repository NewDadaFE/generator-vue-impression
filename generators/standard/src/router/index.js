import Vue from 'vue'
import VueRouter from 'vue-router'
import BookContainer from '../modules/book/container/'
import CountContainer from '../modules/count/Container'

Vue.use(VueRouter)

// 路由配置
const routes = [
  {
    path: '/',
    component: CountContainer
  },
  {
    path: '/book',
    component: BookContainer
  }
]

export default new VueRouter({ routes })
