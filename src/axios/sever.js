import Http from './http'
import * as Api from './type'
// get 公共方法
export const ajaxGet = (url, options) => {
  return Http.get(url, options)
}
// post 公共方法
export const ajaxPost = (url, options) => {
  return Http.post(url, options)
}
// 获取
export const Home = (options) => {
  return Http.post(Api.HOME, options)
}
