import { h, ObjectDirective, render } from 'vue';
import { useRxzSSR } from '@/use';
import { RxzIframeObserveTpl } from '@/components/template';
import { isFunction } from 'lodash';

export type RxzResizeObserveCallBack = (event: Event) => void;

const { isSSR } = useRxzSSR();

export const vRxzResizeObserve: ObjectDirective<HTMLElement, RxzResizeObserveCallBack> = {
  mounted(el, binding) {
    if (isSSR.value) {
      return;
    }
    const div = document.createElement('div');
    render(h(RxzIframeObserveTpl as any, {
      onResize(event: Event) {
        if (isFunction(binding.value)) {
          binding.value(event);
        }
      },
    }), div);
    if (div.firstElementChild) {
      el.appendChild(div.firstElementChild);
    }
  },
};
