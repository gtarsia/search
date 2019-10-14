import bing from './bing'
import { getCachedQueries, cacheQuery } from './cache'

export default async function query(params) {
  let status = 200
  let results = []
  const { cache } = params
  if (cache) {
    results = await getCachedQueries(params)
    if (results.length > 0) {
      console.log('Using cached params for', params)
      return { results, status }
    }
  }
  console.log('Fetching bing for', params)
  const { results: fetchResults, status: fetchStatus } = await bing(params)
  results = fetchResults
  status = fetchStatus
  await cacheQuery(params, results)
  return { results, status }
}
