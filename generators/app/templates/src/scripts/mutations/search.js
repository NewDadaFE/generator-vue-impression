import * as actions from '../actions/search';
import * as MutationTypes from '../constants/MutationType';

const initState = {
    books: [],
};

const mutations = {
    [MutationTypes.SEARCH_BOOK_QUERY](state, content) {
        state.books = content;
    },
};

export default {
    state: initState,
    actions,
    mutations,
};

