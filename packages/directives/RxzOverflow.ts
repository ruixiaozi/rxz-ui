import { RxzTooltip } from './RxzTooltip';
import { DirectiveBinding, ObjectDirective, VNode } from 'vue';
import { Injectable } from '@tanbo/vue-di-plugin';
import { InjectService } from '@/common';
@Injectable({
  provideIn: 'root',
})
export class RxzOverflow implements ObjectDirective {

  name = 'rxz-overflow';

  @InjectService(RxzTooltip)
  private toolTip?: RxzTooltip;

  toolTipConfig: any = {
    arg: 'top',
  }

  mounted = (el: HTMLElement, binding: DirectiveBinding<any>, sourceVnode: VNode) => {
    this.resolveEl(el, binding, sourceVnode);
  }

  updated = (el: HTMLElement, binding: DirectiveBinding<any>, sourceVnode: VNode) => {
    this.resolveEl(el, binding, sourceVnode);
  }

  beforeUnmount = (el: HTMLElement) => {
    this.toolTip?.beforeUnmount(el);
  }

  private resolveEl(el: HTMLElement, binding: DirectiveBinding<any>, sourceVnode: VNode) {
    if (binding.value === undefined || binding.value) {
      el.style.overflow = 'hidden';
      el.style.whiteSpace = 'nowrap';
      el.style.textOverflow = 'ellipsis';
    }
    // 如果出现溢出，则创建或者更新tooltip
    if (el.clientWidth < el.scrollWidth) {
      this.toolTip?.updated(el, this.toolTipConfig, sourceVnode);
    }
  }

}
