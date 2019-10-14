
export function getApiAddress() {
  const key = 'VUE_APP_SEARCH_API_ADDRESS'
  const address = process.env[key]
  if (!address) {
    throw new Error(`process.env.${key} is ${address} but should be not empty`)
  }
  return address
}
