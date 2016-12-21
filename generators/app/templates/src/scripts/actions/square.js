import * as MutationTypes from '../constants/MutationType';

export const plus = ({ commit }) => {
    commit(MutationTypes.PLUS);
};

export const minus = ({ commit }) => {
    commit(MutationTypes.MINUS);
};
