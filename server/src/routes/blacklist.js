import { getBlacklist as get, addToBlacklist as add, removeFromBlacklist as remove } from '../blacklist'
import { qsFromUrl } from '../url'

export async function getBlacklist(req, res) {
  res.writeHead(200)
  const blacklist = await get()
  res.write(JSON.stringify(blacklist))
  res.end()
}

export async function addToBlacklist(req, res) {
  const { url } = req
  const { hostname } = qsFromUrl(url)
  res.writeHead(200)
  const result = await add(hostname)
  res.write(JSON.stringify(result))
  res.end()
}

export async function removeFromBlacklist(req, res) {
  const { url } = req
  const { hostname } = qsFromUrl(url)
  res.writeHead(200)
  const result = await remove(hostname)
  res.write(JSON.stringify(result))
  res.end()
}
