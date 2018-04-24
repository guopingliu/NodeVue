// 引用pages
import demoindex from '@/views/demo/index'
import test from '@/views/demo/test'

// 定义路由路径数组列表
export default [
  {
    path: '/demo/index',
    name: 'index',
    component: demoindex
  },
  {
    path: '/demo/test',
    name: 'test',
    component: test
  }
]
