import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'
import * as Api from '../../axios/type'
let mock = new MockAdapter(axios)
mock.onGet(Api.HOME).reply(200, require('./home.json'))
axios.get(Api.HOME).then(function(response) {
  console.log(response.data)
})
