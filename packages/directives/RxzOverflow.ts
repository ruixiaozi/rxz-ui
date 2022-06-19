import { DirectiveBinding, ObjectDirective } from 'vue';

export class RxzOverflow implements ObjectDirective {

  name = 'rxz-overflow';

  updated(el: HTMLElement, binding: DirectiveBinding<any>): void {
    if (binding.value === undefined || binding.value) {
      el.style.overflow = 'hidden';
      el.style.whiteSpace = 'nowrap';
      el.style.textOverflow = 'ellipsis';
    }
  }

}
