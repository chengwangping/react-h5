import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'
import * as Api from './type'
import config from '../config'
axios.defaults.baseURL = config.apiUrl
axios.defaults.headers = {
  'Content-Type': 'application/json'
}
axios.defaults.timeout = 5000
axios.interceptors
  .request
  .use(config => {
    return config
  })

axios.interceptors
  .response
  .use(response => {
    return response.data
  })

let mockAdapter = new MockAdapter(axios)

mockAdapter.onGet(Api.HOME).reply(200, require('../mock/home.json'))

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
