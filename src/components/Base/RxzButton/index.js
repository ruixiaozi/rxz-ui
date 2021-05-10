/**
 * 通用按钮
 * @file
 * @author ruixiaozi
 * @version 1.0.0
 * @license MIT
 */

 import RxzButton from './src/RxzButton.vue'

 //单组件安装
 RxzButton.install = function(Vue) {
   Vue.component(RxzButton.name, RxzButton);
 };

 export default RxzButton;
