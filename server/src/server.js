
import http from 'http'
import { connect } from './mongo'
import query from './routes/query'
import { getBlacklist, addToBlacklist, removeFromBlacklist } from './routes/blacklist'
import getAdcount from './routes/adcount'
import { getHistory, removeFromHistory } from './routes/history'

export default async function serverStart() {
  await connect()
  const server = http.createServer(async (req, res) => {
    const { url, method } = req
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.setHeader('Access-Control-Request-Method', '*')
    res.setHeader('Access-Control-Allow-Methods', '*')
    res.setHeader('Access-Control-Allow-Headers', '*')
    if (req.method === 'OPTIONS') {
      res.writeHead(200)
      res.end()
    } else if (url.indexOf('/search') === 0) {
      query(req, res)
    } else if (url.indexOf('/blacklist') === 0) {
      if (method === 'GET') {
        getBlacklist(req, res)
      } else if (method === 'POST') {
        addToBlacklist(req, res)
      } else if (method === 'DELETE') {
        removeFromBlacklist(req, res)
      }
    } else if (url.indexOf('/adcount') === 0) {
      if (method === 'GET') {
        getAdcount(req, res)
      } else if (method === 'DELETE') {
        removeFromHistory(req, res)
      }
    } else if (url.indexOf('/history') === 0) {
      if (method === 'GET') {
        getHistory(req, res)
      } else if (method === 'DELETE') {
        removeFromHistory(req, res)
      }
    } else {
      res.writeHead(404)
      res.end()
    }
  })
  const port = process.env.port || 8000
  console.log(`Running server in localhost:${port}`)
  server.listen(port)
}

serverStart()
