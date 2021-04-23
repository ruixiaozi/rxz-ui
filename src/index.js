import Test from '@/components/Test.vue'
// ...如果还有话继续添加

const components = [
  Test,
  // ...如果还有的话继续添加
]

const install = function (Vue) {
  components.map(component => {
    Vue.component(component.name, component);
  })
}

/* 支持使用标签的方式引入 */
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

export default {
  install,
  Test
  // ...如果还有话继续添加
}