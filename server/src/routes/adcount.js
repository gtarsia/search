import { qsFromUrl } from '../url'
import adcount from '../adblock/adcount'

export default async function getAdcount(req, res) {
  const { url: reqUrl } = req
  const { url } = qsFromUrl(reqUrl)
  if (!url) {
    res.writeHead(400)
    res.end()
    return
  }
  const result = await adcount(url)
  res.writeHead(200)
  res.write(JSON.stringify(result))
  res.end()
}
