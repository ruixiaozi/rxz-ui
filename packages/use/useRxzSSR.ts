/**
 * useRxzSSR
 * @description: RxzSSR
 * @author: ruixiaozi
 * @since: 2.0.0
 */
import { App, ref } from 'vue';

// 当前环境是否为SSR
const isSSR = ref(false);

const cbksWithoutSSR: ((app?: App) => void)[] = [];

/**
 * 注册在客户端初始化时执行的方法，非SSR模式下
 * 需要在app.use之前注册
 * @param cbk 回调方法
 */
function registeClientInitNoSSR(cbk: (app?: App) => void) {
  cbksWithoutSSR.push(cbk);
}

/**
 * 运行已经注册在客户端初始化时执行的方法
 * app.use组件库时执行
 */
function runClientInitNoSSR(app: App) {
  if (!isSSR.value) {
    cbksWithoutSSR.forEach((item) => {
      item(app);
    });
  }
}

export function useRxzSSR() {
  return {
    isSSR,
    registeClientInitNoSSR,
    runClientInitNoSSR,
  };
}
