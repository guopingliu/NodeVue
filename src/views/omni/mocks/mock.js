import Mock from 'mockjs'

// 添加用户
Mock.mock('/creditcards/omni/form01/createomniapplication', function (param) {
  console.log('mock create Identity')
  return {
    data: '1234567890'
  }
})
