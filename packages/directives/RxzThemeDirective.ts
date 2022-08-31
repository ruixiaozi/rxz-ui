import { DirectiveBinding, ObjectDirective } from 'vue';
import { Injectable } from '@tanbo/vue-di-plugin';
@Injectable({
  provideIn: 'root',
})
export class RxzThemeDirective implements ObjectDirective {

  name = 'rxz-theme';

  mounted = (el: HTMLElement, binding: DirectiveBinding<any>) => {
    this.resolveEl(el, binding);
  }

  updated = (el: HTMLElement, binding: DirectiveBinding<any>) => {
    this.resolveEl(el, binding);
  }

  private resolveEl(el: HTMLElement, binding: DirectiveBinding<any>) {
    el.dataset.theme = binding.value || 'default';
  }

}
