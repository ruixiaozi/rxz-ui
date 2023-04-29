/**
 * useRxzPopup
 * 管理弹出层
 * @description: RxzPopup
 * @author: ruixiaozi
 * @since: 2.0.0
 */
import { uniqueId } from 'lodash';
import { createApp, reactive, VNode, isVNode, Component, h } from 'vue';
import { useRxzSSR } from './useRxzSSR';
import { RxzComponents } from '@/components';
import { RxzProperties } from '@/properties';
import { RxzDirectives } from '@/directives';

const { isSSR } = useRxzSSR();

// 初始zindex值
let zIndex = 3000;

// 弹出层的容器
let container: HTMLElement | undefined;

const popupMap = reactive(new Map<string, VNode | Component>());

/**
 * 获取popup下一个zindex
 * @returns number
 */
function zIndexNext() {
  return zIndex++;
}

function RxzPopupContainerRender() {
  return (
    <div class="rxz-popup-container">
      {
        [...popupMap.entries()].map(([key, value]) => {
          if (isVNode(value)) {
            return value;
          }
          return h(value, { key });
        })
      }
    </div>
  );
}

/**
 * 添加popup
 * @param popup 弹出层本身内容
 * @param key 指定唯一标识，默认随机
 * @returns 唯一标识
 */
function appendPopup(popup: VNode | Component, key?: string) {
  if (isSSR.value) {
    return '';
  }

  if (!container) {
    container = document.createElement('div');
    container.className = 'rxz-popup-wrap';
    document.body.appendChild(container);
    const containerCnt = createApp({ render: RxzPopupContainerRender });
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
  const popupKey = key || uniqueId();
  popupMap.set(popupKey, popup);
  return popupKey;
}

/**
 * 移除popup
 * @param key 唯一标识
 */
function removePopup(key: string) {
  if (isSSR.value) {
    return;
  }
  popupMap.delete(key);
}

/**
 * 清除popup
 */
function clearPopup() {
  if (isSSR.value || !container) {
    return;
  }
  popupMap.clear();
}

export function useRxzPopup() {
  return {
    zIndexNext,
    appendPopup,
    removePopup,
    clearPopup,
  };
}
