
import { MongoClient } from 'mongodb'

// Connection URL
const url = 'mongodb://localhost:27017'

// Database Name
const dbName = 'search'
let db = null

// Use connect method to connect to the server
export async function connect() {
  const client = await MongoClient.connect(url)
  db = client.db(dbName)
}

const queries = 'queries'
const blacklist = 'blacklist'

export function create() {
  db.createCollection(queries)
  db.queries.createIndex({ q: 1 }, { unique: true })
  db.createCollection(blacklist)
}

export function queriesCollection() {
  return db.collection(queries)
}

export function blacklistCollection() {
  return db.collection(blacklist)
}
