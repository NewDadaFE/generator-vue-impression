import * as MutationTypes from '../constants/MutationType';

export const reset = ({ commit }) => {
    commit(MutationTypes.RESET);
};
