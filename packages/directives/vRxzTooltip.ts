/**
 * vRxzTooltip
 * @description: RxzTooltip
 * @author: ruixiaozi
 * @since: 2.0.0
 */
import { RXZ_POPOVER_POS_E, RXZ_POPOVER_TYPE_E } from '@/components/template/RxzPopoverTpl';
import { debounceByKey } from '@/utils';
import { uniqueId } from 'lodash';
import { DirectiveBinding, ObjectDirective, VNode } from 'vue';
import { useRxzPopover } from '@/use';

interface DirectiveParam {
  el: HTMLElement;
  binding: DirectiveBinding<any>;
  sourceVnode: VNode;
}

const { createPopover, showPopover, hiddenPopover, removePopover, isShowPopover } = useRxzPopover();

const previousParamMap = new Map<string, DirectiveParam>();


function updateTooltip(key: string) {
  const previousParam = previousParamMap.get(key);
  if (!previousParam) {
    return;
  }

  const { el, binding, sourceVnode } = previousParam;
  // eslint-disable-next-line @typescript-eslint/no-use-before-define
  createTooltip(el, binding, sourceVnode);
}

const handleMouseMove = debounceByKey((key: string, pos: 'enter' | 'leave') => {
  const isShow = isShowPopover(key);

  if (pos === 'enter') {
    // 显示的时候更新
    if (!isShow) {
      updateTooltip(key);
    }
    setTimeout(() => {
      showPopover(key);
    });
  } else {
    hiddenPopover(key);
  }
}, 40);

function createTooltip(el: HTMLElement, binding: DirectiveBinding<any>, sourceVnode: VNode) {
  const key = el.dataset.tooltipKey || uniqueId();
  const pos: RXZ_POPOVER_POS_E = binding.arg as RXZ_POPOVER_POS_E || RXZ_POPOVER_POS_E.top;
  const isClick = binding.modifiers?.['click'];
  const allowOuter = binding.modifiers?.['outer'];
  const isWhite = binding.modifiers?.['white'];
  // 如果value为真值，且string后还是真值，使用value值；否则使用宿主元素的内容
  const content = (binding.value && String(binding.value)) || sourceVnode.children || '';
  const resKey = createPopover(el, pos, {
    key,
    type: isWhite ? RXZ_POPOVER_TYPE_E.WHITE : RXZ_POPOVER_TYPE_E.BLACK,
    showArrow: true,
    content,
    // 默认不允许外部关闭
    allowOuterClose: allowOuter ?? false,
    events: {
      onMouseenter: () => {
        if (!isClick) {
          handleMouseMove(key)('enter');
        }
      },
      onMouseleave: () => {
        if (!isClick) {
          handleMouseMove(key)('leave');
        }
      },
    },
  });
  if (!resKey) {
    return;
  }
  el.dataset.tooltipKey = resKey;
  return resKey;
}

function handleClick(key: string) {
  const isShow = isShowPopover(key);
  const pos = isShow ? 'leave' : 'enter';
  handleMouseMove(key)(pos);
}

export const vRxzTooltip: ObjectDirective<HTMLElement, any> = {
  mounted(el, binding, sourceVnode) {
    const key = createTooltip(el, binding, sourceVnode);
    if (!key) {
      return;
    }
    const isClick = binding.modifiers?.['click'];
    if (isClick) {
      el.addEventListener('click', () => handleClick(key));
    } else {
      el.addEventListener('mouseenter', () => handleMouseMove(key)('enter'), false);
      el.addEventListener('mouseleave', () => handleMouseMove(key)('leave'), false);
    }
  },
  updated(el, binding, sourceVnode) {
    const key = el.dataset.tooltipKey;
    if (!key) {
      // 如果没有，重新创建一个tip
      vRxzTooltip.mounted?.(el, binding, sourceVnode, null);
      return;
    }
    // 保存当前的参数，在下一次显示的使用用于更新提示框
    previousParamMap.set(key, { el, binding, sourceVnode });
  },
  beforeUnmount(el) {
    const key = el.dataset.tooltipKey;
    if (!key) {
      return;
    }
    removePopover(key);
    previousParamMap.delete(key);
  },
};
