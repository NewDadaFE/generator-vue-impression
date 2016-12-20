import * as actions from '../actions/count';

const state = {
    count: 0,
};

// getters
const getters = {
    doubleCount: state => state.count * 2,
}

const mutations = {
    increment(state) {
        state.count++;
    },
    decrement(state) {
        state.count--;
    }
};

export default {
    state,
    getters,
    actions,
    mutations,
};
