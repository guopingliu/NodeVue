import Mock from 'mockjs'

// 查找用户
Mock.mock('/demo/user/getUser?UUID=1001', function () {
  console.log('mock query user')
  return {
    'UUID': '1001',
    'userName': 'aaa',
    'department': 'bbb'
  }
})

// 新加用户
Mock.mock('/demo/user/add', function () {
  console.log('mock add user')
  return {}
})
// 删除用户
Mock.mock('/demo/user/delete?UUID=1001', function () {
  console.log('mock delete user')
  return {}
})
// 修改用户
Mock.mock('/demo/user/update', function () {
  console.log('mock update user')
  return {}
})
