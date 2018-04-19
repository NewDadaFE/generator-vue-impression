import * as actions from './action'
import { initState, mutations } from './mutation'

export default {
  namespaced: true,
  state: initState,
  actions,
  mutations
}
