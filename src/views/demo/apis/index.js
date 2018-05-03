import Axios from '@/assets/js/AxiosPlugin'

// api path
// const BASE_PATH = process.env.API_URL

let contextPath = '/demo'
export const addUser = data => {
  return Axios.post(contextPath + '/user/add', data
  ).then(res => res.data)
}
export const deleteUser = userId => {
  return Axios.get(contextPath + '/user/delete?UUID=' + userId
  ).then(res => res.data)
}
export const updateUser = data => {
  return Axios.post(contextPath + '/user/update', data
  ).then(res => res.data)
}
export const getUser = (userID) => {
  return Axios.get(contextPath + '/user/getUser?UUID=' + userID
  ).then(res => res.data)
}
