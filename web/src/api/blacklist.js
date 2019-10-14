import request from '@/lib/request'

export function all() {
  return request('/blacklist')
}

export function add(hostname) {
  const method = 'POST'
  const params = { hostname }
  return request('/blacklist', { method, params })
}

export function remove(hostname) {
  const method = 'DELETE'
  const params = { hostname }
  return request('/blacklist', { method, params })
}
