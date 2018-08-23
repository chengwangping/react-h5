import axios from 'axios'
// import baseUrl from '../config'
// import { Modal } from 'antd-mobile'
// const showAlert = (msg) => {
//   const alertInstance = Modal.alert(msg, {
//     text: '确定',
//     onPress: () => console.log('ok')
//   })
//   setTimeout(() => {
//     alertInstance.close()
//   }, 2000)
// }
// console.log(showAlert)

// axios.defaults.baseURL = baseUrl
axios.defaults.headers = {
  'Content-Type': 'application/json'
  // 'Content-Type': 'application/x-www-form-urlencoded'
}
axios.defaults.timeout = 5000
axios.interceptors
  .request
  .use(config => {
    // config.headers['authtoken'] = sessionStorage.getItem('accessToken')
    return config
  })

axios.interceptors
  .response
  .use(response => {
    if (response.data && response.data.status === 200) {
      return response.data
    } else {
      // showAlert(response.data.message)
      return Promise.reject(response.data)
    }
  }, error => {
    console.log(error.config)
    error.message = '网络异常，请刷新重试！'
    // showAlert(error.message)
    return Promise.reject(error)
  })

export default {
  get(url, data) {
    return axios({
      method: 'get',
      url,
      params: data
    })
  },
  post(url, data) {
    return axios({
      method: 'post',
      url,
      data
    })
  }
}
