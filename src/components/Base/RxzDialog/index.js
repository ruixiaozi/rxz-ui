/**
 * RxzDialog 弹窗组件
 * @file
 * @author ruixiaozi
 * @version 1.0.10
 * @license MIT
 */

 import RxzDialog from './src/RxzDialog.vue'

 //单组件安装
 RxzDialog.install = function(Vue) {
   Vue.component(RxzDialog.name, RxzDialog);
 };

 export default RxzDialog;
