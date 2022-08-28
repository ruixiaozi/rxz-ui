import { RxzIframeObserve } from '@/components/Inner/RxzIframeObserve';
import { DirectiveBinding, h, ObjectDirective, render } from 'vue';
import { isFunction as _isFunction } from 'lodash';
import { Injectable } from '@tanbo/vue-di-plugin';

@Injectable({
  provideIn: 'root',
})
export class RxzResizeObserveDirective implements ObjectDirective {

  name = 'rxz-resize-observe';

  mounted = (el: HTMLElement, binding: DirectiveBinding<any>) => {
    const div = document.createElement('div');
    render(h(RxzIframeObserve, {
      onResize: (event: Event) => {
        if (_isFunction(binding.value)) {
          binding.value(event);
        }
      },
    }), div);
    if (div.firstElementChild) {
      el.appendChild(div.firstElementChild);
    }
  }

}
