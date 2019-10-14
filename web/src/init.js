import { getApiAddress } from './lib/env'
import store from './store'

export default async function init() {
  getApiAddress()
  await store.dispatch('init')
}
