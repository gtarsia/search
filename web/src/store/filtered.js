
export default {
  namespaced: true,
  getters: {
    blockedWithScore: (a, { blocked }, c, { 'blacklist/hostnames': hostnames }) => hostnames.map(hostname => ({ hostname, score: blocked[hostname].length })),
    blocked: (a, { filters: { blocked } }) => blocked,
    displayed: (a, { filters: { displayed } }) => displayed,
    filters(a, b, c, { 'blacklist/hostnames': hostnames, 'results/all': results }) {
      const blocked = {}
      hostnames.forEach((hostname) => {
        blocked[hostname] = []
      })
      const displayed = []
      results.forEach((result) => {
        const { url } = result
        const hostname = hostnames.find(hn => url.indexOf(hn) !== -1)
        if (hostname) {
          if (!blocked[hostname]) {
            blocked[hostname] = []
          }
          blocked[hostname].push({ result })
        } else {
          displayed.push(result)
        }
      })
      return {
        displayed,
        blocked,
      }
    },
  },
}
