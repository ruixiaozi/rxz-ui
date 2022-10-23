import { RxzTooltipDirective } from './RxzTooltipDirective';
import { DirectiveBinding, ObjectDirective, VNode } from 'vue';
import { Injectable } from '@tanbo/vue-di-plugin';
import { InjectService } from '@/common';
@Injectable({
  provideIn: 'root',
})
export class RxzOverflowDirective implements ObjectDirective {

  name = 'rxz-overflow';

  @InjectService(RxzTooltipDirective)
  private toolTip?: RxzTooltipDirective;

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
        this.toolTip?.updated(el, binding, sourceVnode);
      } else {
        // 没有的话，需要销毁掉
        this.toolTip?.beforeUnmount(el);
      }
    }
  }

}
