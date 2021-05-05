import Base from '@/components/Base/index.js'
import Form from '@/components/Form/index.js'
// ...如果还有话继续添加

const components = [
  ...Base,
  ...Form,
  // ...如果还有的话继续添加
]

//引入工具类
import * as utils from './utils/index.js';

//全局引入样式
import '@/style/normalize.css';

const install = function (Vue) {
  components.map(component => {
    Vue.component(component.name, component);
  })

  Vue.prototype.$rxz = utils;
}

/* 支持使用标签的方式引入 */
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

export default {
  install,
  ...Base,
  ...Form,
  // ...如果还有话继续添加
}
