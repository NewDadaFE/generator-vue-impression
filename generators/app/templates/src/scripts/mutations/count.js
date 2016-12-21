import * as actions from '../actions/count';
import * as MutationTypes from '../constants/MutationType';

const initState = {
    count: 0,
};

// getters
const getters = {
    doubleCount: state => state.count * 2,
};

const mutations = {
    [MutationTypes.INCREMENT](state) {
        state.count += 1;
    },
    [MutationTypes.DECREMENT](state) {
        state.count -= 1;
    },
    [MutationTypes.RESET](state) {
        state.count = 0;
    },
};

export default {
    state: initState,
    getters,
    actions,
    mutations,
};
