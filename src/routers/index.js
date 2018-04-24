import Vue from 'vue'
import Router from 'vue-router'

// 路由文件，引用各业务模块路由
// 引入各业务模块路由数据
import demorouters from '@/views/omni/routers/index'

// 配置路由
Vue.use(Router)
// 定义路由实例
export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/form01'
    },
    {
      path: '/form01',
      component: resolve => require(['@/views/omni/form01.vue'], resolve)
    },
    ...demorouters
  ]
})
