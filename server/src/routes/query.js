import query from '../query'
import sanitize from '../sanitize'
import { qsFromUrl } from '../url'

export default async function queryFn(req, res) {
  const { url } = req
  const { ok, errors, result: params } = sanitize(qsFromUrl(url))
  if (!ok) {
    res.writeHead(400)
    res.write(JSON.stringify(errors))
    res.end()
    return
  }
  const { results, status } = await query(params)
  res.writeHead(status)
  res.write(JSON.stringify(results))
  res.end()
}
