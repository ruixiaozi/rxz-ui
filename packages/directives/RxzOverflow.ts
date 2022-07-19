import { DirectiveBinding, ObjectDirective } from 'vue';

export class RxzOverflow implements ObjectDirective {

  name = 'rxz-overflow';

  mounted = (el: HTMLElement, binding: DirectiveBinding<any>) => {
    this.resolveEl(el, binding);
  }

  updated = (el: HTMLElement, binding: DirectiveBinding<any>) => {
    this.resolveEl(el, binding);
  }

  private resolveEl(el: HTMLElement, binding: DirectiveBinding<any>) {
    if (binding.value === undefined || binding.value) {
      el.style.overflow = 'hidden';
      el.style.whiteSpace = 'nowrap';
      el.style.textOverflow = 'ellipsis';
    }
  }

}
