/**
 * RxzForm 表单组件
 * @file
 * @author ruixiaozi
 * @version 1.0.11
 * @license MIT
 */

 import RxzForm from './src/RxzForm.vue'

 //单组件安装
 RxzForm.install = function(Vue) {
   Vue.component(RxzForm.name, RxzForm);
 };

 export default RxzForm;
