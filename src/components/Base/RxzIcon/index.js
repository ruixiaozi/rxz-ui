/**
 * RxzIcon 图标组件
 * @file
 * @author ruixiaozi
 * @version 1.0.3
 * @license MIT
 */

 import RxzIcon from './src/RxzIcon.vue'

 //单组件安装
 RxzIcon.install = function(Vue) {
   Vue.component(RxzIcon.name, RxzIcon);
 };

 export default RxzIcon;
