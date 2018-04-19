import Vue from 'vue'
import Vuex from 'vuex'
import book from './modules/book/'
import count from './modules/count/'

const modules = {
  book,
  count
}

Vue.use(Vuex)

export default new Vuex.Store({
  modules,
  strict: __DEV__
})
