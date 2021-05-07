/**
 * RxzCountDownButton 倒计时按钮
 * @file
 * @author ruixiaozi
 * @version 1.0.0
 * @license MIT
 */
import RxzCountDownButton from './src/RxzCountDownButton.vue'

//单组件安装
RxzCountDownButton.install = function(Vue) {
  Vue.component(RxzCountDownButton.name, RxzCountDownButton);
};

export default RxzCountDownButton;
