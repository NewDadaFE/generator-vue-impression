import Vue from 'vue';
import VueRouter from 'vue-router';
import Index from './views/index';
import Counter from './views/counter';
import Square from './views/square';
import Search from './views/search';

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
    path: '/search',
    component: Search,
}];

export default new VueRouter({
    // base: __dirname,
    scrollBehavior() {
        return { y: 0 };
    },
    routes,
});
