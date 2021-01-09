/*
 * @Descripttion: 
 * @Author: chenxch
 * @Date: 2020-07-27 09:07:18
 */
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './plugins/element.js'
import './assets/styles/base.scss'
import 'ag-grid-community/dist/styles/ag-grid.css'
import 'ag-grid-community/dist/styles/ag-theme-balham.css'
import './assets/styles/ag-styles.css'
import './assets/fonts/fonts.css'

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
}else{
  store.state.kioks = false;
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
