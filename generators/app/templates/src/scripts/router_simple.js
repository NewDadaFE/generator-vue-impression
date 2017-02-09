import Vue from 'vue';
import VueRouter from 'vue-router';
import Index from './views/index';
import Help from './views/help';

Vue.use(VueRouter);

// 路由配置
const routes = [{
    path: '/',
    component: Index,
}, {
    path: '/help',
    component: Help,
}];

export default new VueRouter({
    // base: __dirname,
    scrollBehavior() {
        return { y: 0 };
    },
    routes,
});
