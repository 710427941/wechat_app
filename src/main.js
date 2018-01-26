import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import { LoadingPlugin, ToastPlugin, ConfirmPlugin } from 'vux'

import 'assets/less/index.less'

Vue.config.productionTip = false

Vue.use(LoadingPlugin)
Vue.use(ConfirmPlugin)
Vue.use(ToastPlugin)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
