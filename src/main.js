import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import vuelazyload from 'vue-lazyload'
import fastclick from 'fastclick'
import { LoadingPlugin, ToastPlugin, ConfirmPlugin } from 'vux'

import 'assets/less/index.less'

Vue.config.productionTip = false
fastclick.attach(document.body)

Vue.use(LoadingPlugin)
Vue.use(ConfirmPlugin)
Vue.use(ToastPlugin)

Vue.use(vuelazyload, {
  error: require('assets/images/error.jpg'),
  loading: require('assets/images/default.jpg')
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
