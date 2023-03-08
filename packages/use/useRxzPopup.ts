/**
 * useRxzPopup
 * 管理弹出层
 * @description: RxzPopup
 * @author: ruixiaozi
 * @since: 2.0.0
 */
import { debounce, uniqueId } from 'lodash';
import { h, render, VNode } from 'vue';
import { useRxzSSR } from './useRxzSSR';

const { isSSR } = useRxzSSR();

// 初始zindex值
let zIndex = 3000;

// 弹出层的容器
let container: HTMLElement | undefined;

const vnodeMap = new Map<string, VNode>();

const reRender = debounce(() => {
  if (isSSR.value || !container) {
    return;
  }
  render(h(
    'div',
    {
      class: ['rxz-popup-container'],
    },
    [...vnodeMap.values()],
  ), container);
}, 0);

/**
 * 获取popup下一个zindex
 * @returns number
 */
function zIndexNext() {
  return zIndex++;
}

/**
 * 添加popup
 * @param vnode 虚拟node
 * @param key 指定唯一标识，默认随机
 * @returns 唯一标识
 */
function appendPopup(vnode: VNode, key?: string) {
  if (isSSR.value) {
    return '';
  }

  if (!container) {
    container = document.createElement('div');
    container.className = 'rxz-popup-wrap';
    document.body.appendChild(container);
  }
  // 渲染
  const vNodeKey = key || uniqueId();
  vnodeMap.set(vNodeKey, vnode);
  reRender();
  return vNodeKey;
}

/**
 * 移除popup
 * @param key 唯一标识
 */
function removePopup(key: string) {
  if (isSSR.value) {
    return;
  }
  vnodeMap.delete(key);
  reRender();
}

/**
 * 清除popup
 */
function clearPopup() {
  if (isSSR.value || !container) {
    return;
  }
  vnodeMap.clear();
  render(null, container);
}

export function useRxzPopup() {
  return {
    zIndexNext,
    appendPopup,
    removePopup,
    clearPopup,
  };
}
