import Axios from 'axios'
import Vue from 'vue'
import store from '../store/'
import { LoadingPlugin, ToastPlugin, ConfirmPlugin } from 'vux'
import { setSession } from '../utils/auth'

Vue.use(LoadingPlugin, ToastPlugin, ConfirmPlugin)

// 创建Axios实例
const service = Axios.create({
  baseURL: 'http://192.168.0.100:8080/api/', // api的base_url
  timeout: 15000 // 请求超时时间
})

// request拦截器
service.interceptors.request.use(config => {
  // Do something before request is sent
  if (store.getters.token) {
    config.headers['X-Token'] = setSession() // 让每个请求携带token--['X-Token']为自定义key 请根据实际情况自行修改
  }
  Vue.$vux.loading.show()
  // JSON.parse(config.data)
  return config
}, error => {
  // Do something with request error
  console.log(error) // for debug
  Promise.reject(error)
})

// respone拦截器
service.interceptors.response.use(
  response => {
    Vue.$vux.loading.hide()
    const res = response.data
    if (res.code !== 200) {
      Vue.$vux.toast.show({
        text: res.info,
        type: 'text',
        time: 1000
      })
      if (res.code === 401) {
        Vue.$vux.confirm.show({
          title: '登出确认',
          content: '你已被登出，可以取消继续留在该页面，或者重新登录',
          confirmText: '重新登录',
          cancelText: '取消',
          onConfirm() {
          },
          onCancel() {
          }
        }).then(() => {
          store.dispatch('FedLogOut').then(() => {
            location.reload()// 为了重新实例化vue-router对象 避免bug
          })
        })
      }
      return Promise.reject('error')
    } else {
      return response.data
    }
  },
  error => {
    Vue.$vux.loading.hide()
    if (error.response.status === 401) {
      Vue.$vux.confirm.show({
        title: '提示消息',
        content: error.response.data.message,
        confirmText: '登录',
        cancelText: '取消',
        onConfirm() {
          store.dispatch('FedLogOut').then(() => {
            location.reload()// 为了重新实例化vue-router对象 避免bug
          })
        },
        onCancel() {
        }
      }).then(() => {
        store.dispatch('FedLogOut').then(() => {
          location.reload()// 为了重新实例化vue-router对象 避免bug
        })
      })
    } else {
      Vue.$vux.toast.show({
        text: error.response.data.message,
        type: 'text',
        time: 2000 * 5
      })
    }

    return Promise.reject(error)
  }
)

export default service
