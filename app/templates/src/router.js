import Vue from 'vue'
import VueRouter from 'vue-router'
import { route as bws } from 'src/bws'
import { route as bwm } from 'src/bwm'

Vue.use(VueRouter)

const routes = [...bws, ...bwm, { path: '/', redirect: '/bws/home' }]

const router = new VueRouter({ routes })

export default router
