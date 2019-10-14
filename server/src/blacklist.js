import { blacklistCollection } from './mongo'

export function getBlacklist() {
  return blacklistCollection().find().toArray()
}

export async function addToBlacklist(hostname = '') {
  return blacklistCollection().replaceOne({ hostname }, { hostname }, { upsert: true })
}

export async function removeFromBlacklist(hostname = '') {
  return blacklistCollection().deleteOne({ hostname })
}
