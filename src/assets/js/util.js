import Vue from 'vue'
import { Message } from 'element-ui'
Vue.component(Message.name, Message)

// sessionStorage localStorage
export const session = function (key, value) {
  if (value === void (0)) {
    var lsVal = localStorage.getItem(key)
    if (lsVal && lsVal.indexOf('autostringify-') === 0) {
      return JSON.parse(lsVal.split('autostringify-')[1])
    } else {
      return lsVal
    }
  } else {
    if (typeof (value) === 'object' || Array.isArray(value)) {
      value = 'autostringify-' + JSON.stringify(value)
    }
    return localStorage.setItem(key, value)
  }
}

// 生成随机数
export const getUUID = function (len) {
  len = len || 6
  len = parseInt(len, 10)
  len = isNaN(len) ? 6 : len
  var seed = '0123456789abcdefghijklmnopqrstubwxyzABCEDFGHIJKLMNOPQRSTUVWXYZ'
  var seedLen = seed.length - 1
  var uuid = ''
  while (len--) {
    uuid += seed[Math.round(Math.random() * seedLen)]
  }
  return uuid
}

//  日期格式化
export const dateFormat = function (source, ignoreMinute) {
  var myDate
  var separate = '-'
  var minute = ''
  if (source === void (0)) {
    source = new Date()
  }
  if (source) {
    if (source.split) {
      source = source.replace(/\\-/g, '/')
    } else if (isNaN(parseInt(source))) {
      source = source.toString().replace(/\\-/g, '/')
    } else {
      source = new Date(source)
    }

    if (new Date(source) && (new Date(source)).getDate) {
      myDate = new Date(source)
      if (!ignoreMinute) {
        minute = (myDate.getHours() < 10 ? ' 0' : ' ') + myDate.getHours() + ':' + (myDate.getMinutes() < 10 ? '0' : '') + myDate.getMinutes()
      }
      return myDate.getFullYear() + separate + (myDate.getMonth() + 1) + separate + (myDate.getDate() < 10 ? '0' : '') + myDate.getDate() + minute
    } else {
      return source.slice(0, 16)
    }
  } else {
    return source
  }
}

// ajax错误处理
export const catchError = function (error) {
  if (error.response) {
    let messageInfo = error.response.data.message
    if (messageInfo === null || messageInfo === '' || messageInfo === undefined) {
      messageInfo = error.response.data
    }
    switch (error.response.status) {
      case 400:
        Vue.prototype.$message({
          message: messageInfo || 'Invalid Request!',
          type: 'error'
        })
        break
      case 401:
        Vue.prototype.$message({
          message: messageInfo || 'Wrong Password or Account is not existed!',
          type: 'warning'
        })
        break
      case 403:
        Vue.prototype.$message({
          message: messageInfo || 'Access Denied!',
          type: 'warning'
        })
        break
      case 404:
        Vue.prototype.$message({
          message: messageInfo || 'Error 404, File not Found.',
          type: 'error'
        })
        break
      case 500:
        Vue.prototype.$message({
          message: messageInfo || 'Error 500, internal error.',
          type: 'error'
        })
        break
      default:
        Vue.prototype.$message({
          message: messageInfo || 'Exception on server, Please contact your administrator.',
          type: 'error'
        })
    }
  }
  return Promise.reject(error)
}
