import * as actions from './action'

const initState = {
  books: [],
  count: 0,
  total: 0
}

const mutations = {
  [actions.searchBook.name](state, payload) {
    state.books = payload.books
    state.count = payload.count
    state.total = payload.total
  }
}

export { initState, mutations }
