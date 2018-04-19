import * as actions from './action'

const initState = {
  books: []
}

const mutations = {
  [actions.searchBook.name](state, content) {
    state.books = content
  }
}

export { initState, mutations }
