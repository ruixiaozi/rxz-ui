/**
 * RxzIcon 主题容器组件
 * @file
 * @author ruixiaozi
 * @version 1.0.10
 * @license MIT
 */

 import RxzTheme from './src/RxzTheme.vue'

 //单组件安装
 RxzTheme.install = function(Vue) {
   Vue.component(RxzTheme.name, RxzTheme);
 };

 export default RxzTheme;
