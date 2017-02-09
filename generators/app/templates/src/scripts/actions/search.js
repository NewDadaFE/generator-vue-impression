import URL from '../constants/URL';
import * as MutationTypes from '../constants/MutationType';

// 搜索图书
export const searchBook = ({ commit }, query) => {
    return fetch(`${URL.SEARCH}?q=${query}`)
    .then(response => response.json())
    .then(result => {
        commit(MutationTypes.SEARCH_BOOK_QUERY, result.books);
    });
};
