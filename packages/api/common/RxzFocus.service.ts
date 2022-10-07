import { Injectable } from '@tanbo/vue-di-plugin';

/**
 * Service: RxzFocusService
 * @description: RxzFocus
 * @author: ruixiaozi
 * @since: 2.0.0
 */
@Injectable({
  provideIn: 'root',
})
export class RxzFocusService {

  private tabIndex = 1;

  tabIndexNext() {
    return this.tabIndex++;
  }

}
