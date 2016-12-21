import Vue from 'vue';
import Vuex from 'vuex';
import createLogger from 'vuex/dist/logger';
import actions from './actions';
import modules from './mutations';

Vue.use(Vuex);
const debug = process.env.NODE_ENV !== 'production';

export default new Vuex.Store({
    actions,
    modules,
    strict: debug,
    plugins: debug ? [createLogger()] : [],
});
