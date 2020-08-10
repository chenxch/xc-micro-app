import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './plugins/element.js'

Vue.config.productionTip = false

let instance = null

function render () {
  instance = new Vue({
    router,
    store,
    render: h => h(App)
  }).$mount('#app')

}

if (!window.__POWERED_BY_QIANKUN__) {
  render()
}

export async function bootstrap () {
  // eslint-disable-next-line no-console
  console.log('vue app bootstraped')
}

export async function mount (props) {
  // eslint-disable-next-line no-console
  console.log('props from main framework', props)
  render()
}

export async function unmount () {
  instance.$destroy()
  instance = null
}
