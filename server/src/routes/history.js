import { getHistory as get, removeFromHistory as remove } from '../history'
import { qsFromUrl } from '../url'

export async function getHistory(req, res) {
  res.writeHead(200)
  const queries = await get()
  res.write(JSON.stringify(queries))
  res.end()
}

export async function removeFromHistory(req, res) {
  const { url } = req
  const { q } = qsFromUrl(url)
  res.writeHead(200)
  const result = await remove(q)
  res.write(JSON.stringify(result))
  res.end()
}
