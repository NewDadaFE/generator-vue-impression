import * as MutationTypes from '../constants/MutationType';

export const increment = ({ commit }) => {
    commit(MutationTypes.INCREMENT);
};

export const decrement = ({ commit }) => {
    commit(MutationTypes.DECREMENT);
};
