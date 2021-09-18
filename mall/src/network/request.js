import axios from 'axios'

export function request(config) {
  // 1.创建axios的实例
  const instance = axios.create({
    baseURL: 'http://123.207.32.32:8000',
    timeout: 5000
  })

  // 2.axios的拦截器
  // 2.1.请求拦截的作用
  instance.interceptors.request.use(config => {
    console.log("2.1.请求拦截的作用 ",config);
    return config
  }, err => {
    console.log("网络请求有错误 ",err);
  })

  // 2.2.响应拦截
  instance.interceptors.response.use(res => {
    console.log("2.2.响应拦截的数据 ",res.data);
    return res.data
  }, err => {
    console.log("网络响应 有错误 ",err);
  })

  // 3.发送真正的网络请求
  // 直接包装的就是 Promise
  return instance(config)
}
