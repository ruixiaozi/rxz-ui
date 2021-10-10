# Axios 封装

导出方式：

```
import Axios from 'axios'

//设置请求的默认timeout
Axios.defaults.timeout = 20000
//跨域请求是否需要凭证
Axios.defaults.withCredentials = true
//将axios导出

const request = Axios;
export default request;
```



