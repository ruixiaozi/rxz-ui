import { Injectable } from '@tanbo/vue-di-plugin';

@Injectable({
  provideIn: 'root',
})
export class RxzPopupService {

  private zIndex = 3000;

  zIndexNext() {
    return this.zIndex++;
  }

}
