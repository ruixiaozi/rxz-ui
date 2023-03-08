/**
 * vRxzOverflow
 * @description: RxzOverflow
 * @author: ruixiaozi
 * @since: 2.0.0
 */
import { DirectiveBinding, ObjectDirective, VNode } from 'vue';
import { vRxzTooltip } from './vRxzTooltip';

function resolveEl(el: HTMLElement, binding: DirectiveBinding<any>, sourceVnode: VNode) {
  // 当value为true时，应该显示宿主元素的内容
  if (binding.value === true) {
    binding.value = void 0;
  }

  if (binding.value === void 0 || binding.value) {
    el.style.overflowX = 'hidden';
    el.style.whiteSpace = 'nowrap';
    el.style.verticalAlign = 'bottom';
    el.style.textOverflow = 'ellipsis';
    // 如果出现溢出，则创建或者更新tooltip
    if (el.clientWidth < el.scrollWidth) {
      vRxzTooltip.updated?.(el, binding, sourceVnode as any, null as any);
    } else {
      // 没有的话，需要销毁掉
      vRxzTooltip.beforeUnmount?.(el, binding, sourceVnode as any, null);
    }
  }
}

export const vRxzOverflow: ObjectDirective<HTMLElement, any> = {
  mounted(el, binding, sourceVnode) {
    resolveEl(el, binding, sourceVnode);
  },
  updated(el, binding, sourceVnode) {
    resolveEl(el, binding, sourceVnode);
  },
  beforeUnmount(el, binding, sourceVnode) {
    vRxzTooltip.beforeUnmount?.(el, binding, sourceVnode as any, null);
  },
};
