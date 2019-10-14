import Vue from 'vue'
import Vuex from 'vuex'
import results from './store/results'
import blacklist from './store/blacklist'
import filtered from './store/filtered'
import history from './store/history'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    results,
    blacklist,
    filtered,
    history,
  },
  state: {

  },
  mutations: {

  },
  actions: {
    async init({ dispatch }) {
      dispatch('blacklist/hydrate', {}, { hydrate: true })
      dispatch('history/hydrate', {}, { hydrate: true })
    },
  },
})
