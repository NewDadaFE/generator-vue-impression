const actions = {
  increment: ({ commit }) => {
    commit(actions.increment.name)
  },
  decrement: ({ commit }) => {
    commit(actions.decrement.name)
  },
  reset: ({ commit }) => {
    commit(actions.reset.name)
  }
}

const initState = {
  count: 0
}

const getters = {
  doubleCount: state => state.count * 2
}

const mutations = {
  [actions.increment.name](state) {
    state.count += 1
  },
  [actions.decrement.name](state) {
    state.count -= 1
  },
  [actions.reset.name](state) {
    state.count = 0
  }
}

export default {
  namespaced: true,
  state: initState,
  getters,
  actions,
  mutations
}
