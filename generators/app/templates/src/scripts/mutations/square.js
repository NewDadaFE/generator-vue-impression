import * as actions from '../actions/square';
import * as MutationTypes from '../constants/MutationType';

const initState = {
    number: 1,
};

// getters
const getters = {
    square: state => state.number * state.number,
};

const mutations = {
    [MutationTypes.PLUS](state) {
        state.number += 1;
    },
    [MutationTypes.MINUS](state) {
        state.number -= 1;
    },
    [MutationTypes.RESET](state) {
        state.number = 1;
    },
};

export default {
    state: initState,
    getters,
    actions,
    mutations,
};
