/**
 * RxzFormItem 表单项组件
 * @file
 * @author ruixiaozi
 * @version 1.0.11
 * @license MIT
 */

 import RxzFormItem from './src/RxzFormItem.vue'

 //单组件安装
 RxzFormItem.install = function(Vue) {
   Vue.component(RxzFormItem.name, RxzFormItem);
 };

 export default RxzFormItem;
