import { debounce as _debounce } from 'lodash';
import { ComponentPublicInstance } from 'vue';

/**
   * 比较器
   * @param cmpA 数据A
   * @param cmpB 数据B
   * @param isReverse 是否反向比较
   * @returns 0/-1/1
   */
export function comparator(cmpA: any, cmpB: any, isReverse?: boolean) {
  const realCmpA = isReverse ? cmpB : cmpA;
  const realCmpB = isReverse ? cmpA : cmpB;

  if (realCmpA === realCmpB) {
    return 0;
  }
  if (realCmpA > realCmpB) {
    return 1;
  }

  return -1;
}


/**
 * 判断原元素是否为组件元素
 * @param sourceEl 原元素
 * @returns 是否为组件元素
 */
export function isComponent(sourceEl: Element | ComponentPublicInstance): sourceEl is ComponentPublicInstance {
  if ((sourceEl as any).$el) {
    return true;
  }
  return false;
}

/**
 * 获取一个基于key的防抖方法
 * @param callBack 回调方法
 * @param timeout 延时
 * @returns 返回一个基于key的防抖方法
 */
export function debounceByKey(callBack: (...args: any) => any, timeout: number) {
  // 保存对应key的回调
  const keyCallBack = {};
  return (key: string) => (keyCallBack[key] = keyCallBack[key] || _debounce((...args) => {
    callBack(key, ...args);
  }, timeout));
}
