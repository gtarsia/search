import { queriesCollection } from './mongo'

export function getHistory() {
  return queriesCollection().find({}, { q: 1 }).toArray()
}

export async function removeFromHistory(q) {
  return queriesCollection().deleteOne({ q })
}
