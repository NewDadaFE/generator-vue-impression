import URL from '../constants/URL';

// 搜索图书
export const searchBook = query => {
    return fetch(`${URL.SEARCH}?q=${query}`)
    .then(response => response.json())
    .then(result => {
        return {
            flag: true,
            books: result.books,
        };
    });
};
