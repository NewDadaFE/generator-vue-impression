import * as actions from '../actions/count';

const initState = {
    count: 0,
};

// getters
const getters = {
    doubleCount: state => state.count * 2,
};

const mutations = {
    increment(state) {
        state.count += 1;
    },
    decrement(state) {
        state.count -= 1;
    },
    reset(state) {
        state.count = 0;
    },
};

export default {
    state: initState,
    getters,
    actions,
    mutations,
};
