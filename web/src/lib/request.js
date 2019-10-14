import { getApiAddress } from './env'
import fetch from './fetch'

export default function serverRequest(url, init) {
  const host = getApiAddress()
  return fetch(host + url, init)
}
