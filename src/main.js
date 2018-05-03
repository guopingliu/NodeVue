// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import 'babel-polyfill'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import App from './App'
import router from './routers'
import axios from '@/assets/js/AxiosPlugin'
// import store from './stores'

Vue.prototype.$http = axios
// import './mocks/mock'

// start mock
if (/localhost/.test(location.href) || location.search === '?mock') {
  require('@/mocks/mock')
}
Vue.use(ElementUI)
// Vue.use(ajax)

Vue.config.productionTip = false

// check if token is existed, if not existed, redirect url to login page
router.beforeEach((to, from, next) => {
  // if (to.path !== '/login') {
  //   var token = sessionStorage.getItem('token')
  //   console.log(' beforeEach token: ' + token)

  //   if (token === null) {
  //     next({ path: '/login' })
  //   } else {
  //     var flag = true
  //     //  var routers = sessionStorage.getItem('routers')
  //     //  routers.split('_').forEach(v => {
  //     //    if (v === to.path) {
  //     //      flag = true
  //     //    }
  //     //  })
  //     if (flag) {
  //       next()
  //     } else {
  //       next({ path: '/home' })
  //     }
  //   }
  // } else {
  next()
  // }
})

/* eslint-disable no-new */
new Vue({
  // store,
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
