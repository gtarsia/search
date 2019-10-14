import { parse } from 'query-string'

export function qsFromUrl(url) {
  const index = url.indexOf('?')
  return index !== -1 ? parse(url.substr(index)) : {}
}
