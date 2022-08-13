import { Injectable } from '@tanbo/vue-di-plugin';

/**
 * Service: RxzPopupService
 * @description: 弹出层公共服务
 * @author: ruixiaozi
 * @since: 2.0.0
 */
@Injectable({
  provideIn: 'root',
})
export class RxzPopupService {

  private zIndex = 3000;

  zIndexNext() {
    return this.zIndex++;
  }

}
