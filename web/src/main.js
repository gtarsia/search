import 'bulma/css/bulma.css'
import Vue from 'vue'
import App from './App.vue'
import store from './store'
import init from './init'

async function run() {
  await init()
  Vue.config.productionTip = false
  new Vue({
    store,
    render: h => h(App),
  }).$mount('#app')
}

run()
