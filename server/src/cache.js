import { queriesCollection } from './mongo'

export async function getCachedQueries({ q, offset, count }) {
  const coll = queriesCollection()
  const $set = { lastAccess: new Date() }
  const { value } = await coll.findOneAndUpdate({ q }, { $set })
  const { results } = value || { results: [] }
  return results.slice(offset, offset + count - 1)
}

export async function cacheQuery({ q, offset, count }, resultsArg) {
  const coll = queriesCollection()
  const { results } = await coll.findOne({ q }) || { results: [] }
  results.splice(offset, count, ...resultsArg)
  const set = { q, results, lastAccess: new Date() }
  coll.replaceOne({ q }, set, { upsert: true })
}
