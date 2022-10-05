import { POPOVER_TYPE_E, POPOVER_POS_E, RxzPopperService } from '../components/Inner/RxzPopper/index';
import { DirectiveBinding, ObjectDirective, VNode } from 'vue';
import { debounceByKey, InjectService } from '@/common';
import { uniqueId as _uniqueId } from 'lodash';
import { Injectable } from '@tanbo/vue-di-plugin';


interface DirectiveParam {
  el: HTMLElement;
  binding: DirectiveBinding<any>;
  sourceVnode: VNode;
}

@Injectable({
  provideIn: 'root',
})
export class RxzTooltipDirective implements ObjectDirective {

  @InjectService(RxzPopperService)
  private rxzPopperService?: RxzPopperService;

  private previousParam = new Map<string, DirectiveParam>();

  name = 'rxz-tooltip';

  // 值为提示的内容，如果没有，则直接将其子结点作为提示内容
  // 参数指明其位置()
  mounted = (el: HTMLElement, binding: DirectiveBinding<any>, sourceVnode: VNode) => {
    const key = this.createTooltip(el, binding, sourceVnode);
    if (!key) {
      return;
    }
    const isClick = binding.modifiers?.['click'];
    if (isClick) {
      el.addEventListener('click', () => this.handleClick(key));
    } else {
      el.addEventListener('mouseenter', () => this.handleMouseMove(key)('enter'), false);
      el.addEventListener('mouseleave', () => this.handleMouseMove(key)('leave'), false);
    }
  }

  updated = (el: HTMLElement, binding: DirectiveBinding<any>, sourceVnode: VNode) => {
    const key = el.dataset.tooltipKey;
    if (!key) {
      // 如果没有，重新创建一个tip
      this.mounted(el, binding, sourceVnode);
      return;
    }
    // 保存当前的参数，在下一次显示的使用用于更新提示框
    this.previousParam.set(key, { el, binding, sourceVnode });
  }

  beforeUnmount = (el: HTMLElement) => {
    const key = el.dataset.tooltipKey;
    if (!key) {
      return;
    }
    this.rxzPopperService?.removePopper(key);
    this.previousParam.delete(key);
  }

  private updateTooltip(key: string) {
    const previousParam = this.previousParam.get(key);
    if (!previousParam) {
      return;
    }

    const { el, binding, sourceVnode } = previousParam;
    this.createTooltip(el, binding, sourceVnode);
  }

  private createTooltip(el: HTMLElement, binding: DirectiveBinding<any>, sourceVnode: VNode) {
    const key = el.dataset.tooltipKey || _uniqueId();
    const pos: POPOVER_POS_E = binding.arg as POPOVER_POS_E || POPOVER_POS_E.top;
    const isClick = binding.modifiers?.['click'];
    const allowOuter = binding.modifiers?.['outer'];
    const isWhite = binding.modifiers?.['white'];
    // 如果value为真值，且string后还是真值，使用value值；否则使用宿主元素的内容
    const content = (binding.value && String(binding.value)) || sourceVnode.children || '';
    const resKey = this.rxzPopperService?.createPopper(key, el, {
      pos,
      type: isWhite ? POPOVER_TYPE_E.WHITE : POPOVER_TYPE_E.BLACK,
      showArrow: true,
      content,
      // 默认不允许外部关闭
      allowOuterClose: allowOuter ?? false,
      events: {
        onMouseenter: () => {
          if (!isClick) {
            this.handleMouseMove(key)('enter');
          }
        },
        onMouseleave: () => {
          if (!isClick) {
            this.handleMouseMove(key)('leave');
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

  // 防抖方法，颗粒度在单个指令进行防抖，防止快速从元素滑动到tooltip上，出现闪动
  private handleMouseMove = debounceByKey((key: string, pos: 'enter' | 'leave') => {
    const rxzPopper = this.rxzPopperService?.getComponent(key);
    if (!rxzPopper) {
      return;
    }

    if (pos === 'enter') {
      // 显示的时候更新
      if (!rxzPopper.isShow) {
        this.updateTooltip(key);
      }
      setTimeout(() => {
        this.rxzPopperService?.showPopper(key);
      });
    } else {
        this.rxzPopperService?.hiddenPopper(key);
    }
  }, 40);

  private handleClick(key: string) {
    const rxzPopper = this.rxzPopperService?.getComponent(key);

    if (rxzPopper) {
      const pos = rxzPopper.isShow ? 'leave' : 'enter';
      this.handleMouseMove(key)(pos);
    }
  }

}
