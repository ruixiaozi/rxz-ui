import { debounce } from 'lodash';
import { Component, ComponentPublicInstance } from 'vue';

/**
 * 判断原元素是否为组件元素
 * @param sourceEl 原元素
 * @returns 是否为组件元素
 */
export function isComponentInstance(sourceEl: Element | ComponentPublicInstance): sourceEl is ComponentPublicInstance {
  if ((sourceEl as any)?.$el) {
    return true;
  }
  return false;
}

/**
 * 判断原是否为组件定义
 * @param component 组件定义对象
 * @returns 是否为组件
 */
export function isComponent(component: any): component is Component {
  if (component?.props && !component?.__v_isVNode) {
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
  const keyCallBack: any = {};
  return (key: string) => (keyCallBack[key] = keyCallBack[key] || debounce((...args) => {
    callBack(key, ...args);
  }, timeout));
}

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
 * 根据语言格式化日期
 * @param local 本地语言
 * @param _date 日期
 * @returns 格式化字符串
 */
export function formatDate(local: string, _date: string | number | Date) {
  try {
    const date = new Date(_date);
    if (local === 'zh') {
      return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
    }
    return `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
  } catch (error) {
    return '-';
  }
}
