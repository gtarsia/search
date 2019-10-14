import { all, remove } from '@/api/history'

export default {
  namespaced: true,
  state: {
    entries: [],
  },
  mutations: {
    all(state, entries) { state.entries = entries },
    remove(state, _q) {
      const index = state.entries.findIndex(({ q }) => q === _q)
      if (index !== -1) {
        state.entries.splice(index, 1)
      }
    },
  },
  actions: {
    async hydrate({ commit }) {
      const entries = await all()
      commit('all', entries)
    },
    async removeEntry({ commit }, q) {
      await remove(q)
      commit('remove', q)
    },
  },
  getters: {
    entries: ({ entries }) => entries,
  },
}
