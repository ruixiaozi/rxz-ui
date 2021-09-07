/**
 * 用于测试
 */
import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false



import rxzUI from "@/index"

Vue.use(rxzUI);


new Vue({
  render: h => h(App),
}).$mount('#app')
