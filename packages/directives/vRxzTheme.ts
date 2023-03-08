/**
 * vRxzTheme
 * @description: RxzTheme
 * @author: ruixiaozi
 * @since: 2.0.0
 */
import { DirectiveBinding, ObjectDirective } from 'vue';

function resolveEl(el: HTMLElement, binding: DirectiveBinding<any>) {
  el.dataset.theme = binding.value || 'default';
}

export const vRxzTheme: ObjectDirective<HTMLElement, any> = {
  mounted(el, binding) {
    resolveEl(el, binding);
  },
  updated(el, binding) {
    resolveEl(el, binding);
  },
};
