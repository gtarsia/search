
import query from '@/api/query'

export default {
  namespaced: true,
  state: {
    all: [],
    input: '',
  },
  mutations: {
    all(state, all) { state.all = all },
    input(state, text) { state.input = text },
  },
  actions: {
    async query({ commit }, params) {
      const results = await query(params)
      const { q } = params
      commit('input', q)
      commit('all', results)
    },
  },
  getters: {
    all: ({ all }) => all,
    input: ({ input }) => input,
  },
}
