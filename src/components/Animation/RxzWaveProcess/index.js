/**
 * 水波进度组件
 * @file
 * @author ruixiaozi
 * @version 1.0.16
 * @license MIT
 */

 import RxzWaveProcess from './src/RxzWaveProcess.vue'

 //单组件安装
 RxzWaveProcess.install = function(Vue) {
   Vue.component(RxzWaveProcess.name, RxzWaveProcess);
 };

 export default RxzWaveProcess;
