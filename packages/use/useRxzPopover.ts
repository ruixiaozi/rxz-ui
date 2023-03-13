/**
 * useRxzPopover
 * 弹出框
 * @description: RxzPopover
 * @author: ruixiaozi
 * @since: 2.0.0
 */
import { RxzPopoverTpl, RXZ_POPOVER_POS_E, RXZ_POPOVER_TYPE_E } from '@/components/template/RxzPopoverTpl';
import { debounceByKey, isComponent, isComponentInstance, transformPos } from '@/utils';
import { isEqual, uniqueId } from 'lodash';
import { Component, ComponentPublicInstance, h, Ref, VNode } from 'vue';
import { useRxzPopup } from './useRxzPopup';
import { useRxzSSR } from './useRxzSSR';

export interface RxzPopoverOptions {
  // 唯一标识（建议用UUID，或者第一次创建不传入）
  key?: string;
  // 与宿主元素的距离，默认4
  gap?: number;
  // 默认为RXZ_POPOVER_TYPE_E.WHITE
  type?: RXZ_POPOVER_TYPE_E;
  // 是否显示箭头，默认为true
  showArrow?: boolean;
  // 是否显示圆角，默认true
  radius?: boolean;
  // 是否开启内边距，默认true
  padding?: boolean;
  // 内容，可以是字符串、组件、虚拟NODE、虚拟dom数组
  content?: string | Component | VNode | VNode[];
  // 组件的props（事件用onXxx）
  contentCntProps?: any;
  // 是否允许点击外部关闭，默认true
  allowOuterClose?: boolean;
  // 允许自动回收，默认false
  allowAutoRemove?: boolean;
  // 事件处理器
  events?: { [key: string]: (...args: any[]) => any };
}

// 回收超过30秒没有显示的popover
const AUTO_REMOVE_TIMEOUT = 30000;

const popoverMap = new Map<string, VNode>();

const { zIndexNext, appendPopup, removePopup } = useRxzPopup();
const { registeClientInitNoSSR, isSSR } = useRxzSSR();

/**
 * 创建一个弹出框，但不显示，需要手动显示
 * @param sourceEl 宿主元素
 * @param pos 相对于宿主元素的位置
 * @param options 选项
 * @returns
 */
function createPopover(sourceEl: Element | ComponentPublicInstance, pos: RXZ_POPOVER_POS_E, options?: RxzPopoverOptions) {
  if (isSSR.value) {
    return '';
  }
  const popoverKey = options?.key || uniqueId();
  const el = isComponentInstance(sourceEl) ? sourceEl.$el : sourceEl;
  let vnode: any = popoverMap.get(popoverKey);
  if (vnode) {
    // 判断参数是否相同，如果相同则直接返回对应的key
    if (isEqual(vnode.popoverHostEl, el) && isEqual(vnode.popoverPos, pos) && isEqual(vnode.popoverOptions, options)) {
      // showPopover(popoverKey);
      return popoverKey;
    }
  }
  vnode = h(
    RxzPopoverTpl as any,
    {
      radius: options?.radius,
      padding: options?.padding,
      type: options?.type,
      showArrow: options?.showArrow,
      pos,
      popoverKey,
      style: {
        zIndex: zIndexNext(),
        ...(transformPos(el, pos, options?.showArrow, options?.gap) || {}),
      },
      ...(options?.events || {}),
    },
    {
      default: () => {
        if (options?.content && isComponent(options?.content)) {
          return h(options?.content, options?.contentCntProps);
        }
        return options?.content;
      },
    },
  );
  vnode.popoverHostEl = el;
  vnode.popoverPos = pos;
  vnode.popoverOptions = options;
  vnode.allowOuterClose = options?.allowOuterClose ?? true;
  vnode.allowAutoRemove = options?.allowAutoRemove ?? false;
  vnode.lastUpdateTime = new Date().getTime();
  const resKey = appendPopup(vnode, popoverKey);
  if (!resKey) {
    return;
  }
  popoverMap.set(resKey, vnode);
  return resKey;
}


// 防抖方法，颗粒度在单个指令进行防抖，防止快速改变popover的状态，出现闪动
const changePopoverState = debounceByKey((key: string, _isShow: boolean) => {
  const vnode = popoverMap.get(key);
  const isShow: Ref<boolean> | undefined = vnode?.component?.exposed?.isShow;
  if (isShow) {
    if (isShow.value !== _isShow) {
      // 记录上次改变的时间
      (vnode as any).lastUpdateTime = new Date().getTime();
      isShow.value = _isShow;
    }
  }
}, 10);

/**
 * 显示弹出框
 * @param key 弹出框唯一key
 * @returns
 */
function showPopover(key: string) {
  if (isSSR.value) {
    return;
  }
  changePopoverState(key)(true);
}

/**
 * 隐藏弹出框
 * @param key 弹出框唯一key
 * @returns
 */
function hiddenPopover(key: string) {
  if (isSSR.value) {
    return;
  }
  changePopoverState(key)(false);
}

/**
 * 移除弹出框
 * @param key 弹出框唯一key
 * @returns
 */
function removePopover(key: string) {
  if (isSSR.value) {
    return;
  }
  removePopup(key);
  popoverMap.delete(key);
}

/**
 * 创建并显示一个弹出框
 * @param sourceEl 宿主元素
 * @param pos 相对于宿主元素的位置
 * @param options 选项
 * @returns
 */
function openPopover(sourceEl: Element | ComponentPublicInstance, pos: RXZ_POPOVER_POS_E, options?: RxzPopoverOptions) {
  const resKey = createPopover(sourceEl, pos, options);
  // 更新后显示弹出层
  if (resKey) {
    setTimeout(() => {
      showPopover(resKey);
    });
  }
  return resKey;
}

/**
 * 从页面某个元素开始，向上找到弹出框的key，如果存在的话
 * @param el 宿主元素
 * @returns
 */
function getPopoverKey(el: HTMLElement) {
  if (isSSR.value) {
    return '';
  }
  let key;
  let current: any = el;
  while (current) {
    if (current.dataset.rxzPopover) {
      key = current.dataset.rxzPopover;
    }
    current = current.parentElement;
  }
  return key;
}

// 全局监听，启动时注册
registeClientInitNoSSR(() => {
  // 点击其他位置，关闭所有的弹出层
  document.addEventListener('click', (event: Event) => {
    const target = event.target as HTMLElement;
    const popoverKey = getPopoverKey(target);
    [...popoverMap.entries()].forEach(([key, vnode]) => {
      if (key !== popoverKey && (vnode as any).allowOuterClose) {
        hiddenPopover(key);
      }
    });
  }, true);
  // 每隔5秒，回收一次超过30秒未打开的弹出层
  setInterval(() => {
    const nowDate = new Date().getTime();
    [...popoverMap.entries()].forEach(([key, vnode]) => {
      const isShow: Ref<boolean> | undefined = vnode?.component?.exposed?.isShow;
      if (isShow) {
        const { lastUpdateTime, allowAutoRemove } = vnode as any;
        if (!isShow.value && allowAutoRemove && lastUpdateTime && nowDate - lastUpdateTime > AUTO_REMOVE_TIMEOUT) {
          removePopover(key);
        }
      }
    });
  }, 5000);
});

/**
 * 根据key获取popover的虚拟node
 * @param key 唯一标识
 * @returns
 */
function getPopoverVNode(key: string) {
  return popoverMap.get(key);
}

export function useRxzPopover() {
  return {
    createPopover,
    openPopover,
    removePopover,
    showPopover,
    hiddenPopover,
    getPopoverVNode,
  };
}
