import fetch from './fetch'
import key from './key'

export default async function query(params) {
  const headers = {
    'Ocp-Apim-Subscription-Key': key,
  }
  const { q } = params
  const mkt = 'en-US'
  params = { q, mkt, ...params }
  const init = { params, headers }
  const response = await fetch('https://api.cognitive.microsoft.com/bing/v7.0/search', init)
  const { status, parsedJson: { webPages: { value: results } } } = response
  return { status, results }
}
