import { isArray } from 'lodash'

async function check(response) {
  if (!response.ok) {
    const body = await response.text()
    const title = response.statusText
    throw new Error(`${title}, ${body}`)
  }
  return response
}

async function jsonResponse(response) {
  const text = await response.text()
  return JSON.parse(text)
}

function getSearchParams(params) {
  const searchParams = new URLSearchParams()
  Object.keys(params).forEach((key) => {
    const { [key]: val } = params
    if (isArray(val)) {
      val.forEach(el => searchParams.append(key, el))
    } else {
      searchParams.append(key, val)
    }
  })
  return searchParams
}

export default function request(_url, init = {}) {
  const url = new URL(_url)
  const { params } = init
  if (params) {
    url.search = getSearchParams(params)
  }
  // eslint-disable-next-line no-param-reassign
  init = { headers: {}, ...init }
  if (!init.headers['Content-Type']) {
    const contentType = 'application/json'
    Object.assign(init.headers, { 'Content-Type': contentType })
  }
  if (init.headers['Content-Type'].indexOf('application/json') > -1) {
    const body = JSON.stringify(init.body)
    Object.assign(init, { body })
  }
  console.log(`${url} ${init.method}`)
  return fetch(url, init)
    .then(check)
    .then(jsonResponse)
}
