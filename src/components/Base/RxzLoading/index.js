/**
 * RxzLoading 加载组件
 * @file
 * @author ruixiaozi
 * @version 1.0.12
 * @license MIT
 */

 import RxzLoading from './src/RxzLoading.vue'

 //单组件安装
 RxzLoading.install = function(Vue) {
   Vue.component(RxzLoading.name, RxzLoading);
 };

 export default RxzLoading;
