import Axios from '@/assets/js/AxiosPlugin'

// api path
// const BASE_PATH = process.env.API_URL

// let contextPath = '/demo'
export const createOmniApplication = (data) => {
  // console.log('BASE_PATH:' + BASE_PATH)
  // return Axios.post(BASE_PATH + '/creditcards/omni/form01/createomniapplication', data
  return Axios.post('/creditcards/omni/form01/createomniapplication', data).then(function (res) {
    console.log(res)
    return res.data
  })
}
