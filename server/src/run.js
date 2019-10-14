
import server from './server'
import { connect } from './mongo'

async function run() {
  await connect()
  server()
}

run()
