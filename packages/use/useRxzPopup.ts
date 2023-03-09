/**
 * useRxzPopup
 * 管理弹出层
 * @description: RxzPopup
 * @author: ruixiaozi
 * @since: 2.0.0
 */
import { RxzPopupTpl } from '@/components/template';
import { uniqueId } from 'lodash';
import { createApp, reactive, VNode } from 'vue';
import { useRxzSSR } from './useRxzSSR';
import { RxzComponents } from '@/components';
import { RxzProperties } from '@/properties';
import { RxzDirectives } from '@/directives';

const { isSSR } = useRxzSSR();

// 初始zindex值
let zIndex = 3000;

// 弹出层的容器
let container: HTMLElement | undefined;

const vnodeMap = reactive(new Map<string, VNode>());

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
    const containerCnt = createApp(RxzPopupTpl, {
      vnodeMap,
    });
    // 注册组件
    RxzComponents.forEach((item) => {
      containerCnt.component(item.__name || item.name, item);
    });
    // 注册properties
    Object.entries(RxzProperties).forEach(([_key, value]) => {
      containerCnt.config.globalProperties[_key] = value;
    });
    // 注册指令
    Object.entries(RxzDirectives).forEach(([_key, value]) => {
      containerCnt.directive(
        _key.slice(1)
          .replace(/(?<k1>[a-z])(?<k2>[A-Z])/ug, '$1-$2')
          .toLowerCase(),
        value,
      );
    });
    containerCnt.mount(container);
  }
  // 渲染
  const vNodeKey = key || uniqueId();
  vnodeMap.set(vNodeKey, vnode);
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
}

/**
 * 清除popup
 */
function clearPopup() {
  if (isSSR.value || !container) {
    return;
  }
  vnodeMap.clear();
}

export function useRxzPopup() {
  return {
    zIndexNext,
    appendPopup,
    removePopup,
    clearPopup,
  };
}
