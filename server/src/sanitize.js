

export default function sanitize(params = {}) {
  const {
    q, offset, count, cache,
  } = params
  const errors = []
  if (typeof q !== 'string') {
    errors.push(`q is ${q} but should be of type String`)
  }
  if (Number.isNaN(parseInt(offset, 10))) {
    errors.push(`offset is ${offset} but should be of type Integer`)
  }
  if (Number.isNaN(parseInt(count, 10))) {
    errors.push(`count is ${count} but should be of type Integer`)
  }
  if (cache !== undefined
      && cache !== 'false'
      && cache !== 'true') {
    errors.push(`cache is ${cache} but should be 'true', 'false' or undefined`)
  }
  const ok = errors.length === 0
  let result = {}
  if (ok) {
    result = {
      q: q.trim(),
      offset: parseInt(offset, 10),
      count: parseInt(count, 10),
      cache: (cache !== 'false'),
    }
  }
  return { ok, errors, result }
}
