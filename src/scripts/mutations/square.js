import * as actions from '../actions/square';

const initState = {
    number: 1,
};

// getters
const getters = {
    square: state => state.number * state.number,
};

const mutations = {
    plus(state) {
        state.number += 1;
    },
    minus(state) {
        state.number -= 1;
    },
    reset(state) {
        state.number = 1;
    },
};

export default {
    state: initState,
    getters,
    actions,
    mutations,
};
