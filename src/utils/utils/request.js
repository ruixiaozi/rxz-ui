import Axios from 'axios'

//设置请求的默认timeout
Axios.defaults.timeout = 20000
//跨域请求是否需要凭证
Axios.defaults.withCredentials = true

Axios.interceptors.request.use(
  config => {
    var token = localStorage.getItem('token')
    if (token && token != '') {

      config.headers['token'] = token
    }
    return config
  },
  err => {
    console.log(err)
    return Promise.reject(err)
  },
)
//将axios导出
export default Axios;
