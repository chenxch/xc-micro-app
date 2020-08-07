/*
 * @Descripttion: 
 * @Author: chenxch
 * @Date: 2020-07-27 09:07:18
 */
import Vue from 'vue'
import App from './App.vue'
import store from './store'

Vue.config.productionTip = false

let instance = null

function render () {
  instance = new Vue({
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
  props.onGlobalStateChange((state, prevState) => {
    console.log(state, prevState);
  },true);
  const state = {qq:12333}
  props.setGlobalState(state);
  Vue.prototype.$action = props;
  render()
}

export async function unmount () {
  instance.$destroy()
  instance = null
}
