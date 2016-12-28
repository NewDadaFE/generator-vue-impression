import Vue from 'vue';
import VueRouter from 'vue-router';
import Index from './views/index';
import Counter from './views/counter';
import Square from './views/square';
import Help from './views/help';

Vue.use(VueRouter);

// 路由配置
const routes = [{
    path: '/',
    component: Index,
}, {
    path: '/counter',
    component: Counter,
}, {
    path: '/square',
    component: Square,
}, {
    path: '/help',
    component: Help,
}];

export default new VueRouter({
    // base: __dirname,
    scrollBehavior: () => ({ y: 0 }),
    routes,
});
