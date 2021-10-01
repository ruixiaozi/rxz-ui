/**
 * 翻转卡片组件
 * @file
 * @author ruixiaozi
 * @version 1.0.19
 * @license MIT
 */

 import RxzFlipCard from './src/RxzFlipCard.vue'

 //单组件安装
 RxzFlipCard.install = function(Vue) {
   Vue.component(RxzFlipCard.name, RxzFlipCard);
 };

 export default RxzFlipCard;
