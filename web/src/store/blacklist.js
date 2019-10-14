import { all, add, remove } from '@/api/blacklist'

export default {
  namespaced: true,
  state: {
    hostnames: [],
  },
  mutations: {
    all(state, hostnames) { state.hostnames = hostnames },
    add(state, hostname) { state.hostnames.push(hostname) },
    remove(state, hostname) {
      const index = state.hostnames.indexOf(hostname)
      if (index !== -1) {
        state.hostnames.splice(index, 1)
      }
    },
  },
  actions: {
    async hydrate({ commit }) {
      const hostnames = (await all()).map(({ hostname }) => hostname)
      commit('all', hostnames)
    },
    async addUrl({ commit }, url) {
      const { hostname } = new URL(url)
      await add(hostname)
      commit('add', hostname)
    },
    async addHostname({ commit }, hostname) {
      await add(hostname)
      commit('add', hostname)
    },
    async removeHostname({ commit }, hostname) {
      await remove(hostname)
      commit('remove', hostname)
    },
  },
  getters: {
    hostnames: ({ hostnames }) => hostnames,
  },
}
