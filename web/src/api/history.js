import request from '@/lib/request'

export function all() {
  return request('/history')
}

export function remove(q) {
  const method = 'DELETE'
  const params = { q }
  return request('/history', { method, params })
}
