import { DirectiveBinding, h, ObjectDirective, render } from 'vue';
import { Injectable } from '@tanbo/vue-di-plugin';
import { RxzLoadingTpl } from '@/components/Inner/RxzLoadingTpl';

@Injectable({
  provideIn: 'root',
})
export class RxzLoadingirective implements ObjectDirective {

  name = 'rxz-loading';

  mounted = (el: HTMLElement, binding: DirectiveBinding<any>) => {
    this.createLoading(el, binding.value ?? true);
  }

  updated = (el: HTMLElement, binding: DirectiveBinding<any>) => {
    this.createLoading(el, binding.value ?? true);
  }

  beforeUnmount = (el: HTMLElement) => {
    render(null, el);
  }


  private createLoading(el: HTMLElement, isShow: boolean) {
    if (isShow) {
      render(h(RxzLoadingTpl, {
        isGlobal: false,
      }), el);
      return;
    }
    render(null, el);
  }

}
