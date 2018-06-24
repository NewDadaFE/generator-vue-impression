import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const modules = {}

const store = new Vuex.Store({
  modules,
  strict: true,
})

export default store
