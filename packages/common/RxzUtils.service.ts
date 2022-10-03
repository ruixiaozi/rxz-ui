import { Injectable } from '@tanbo/vue-di-plugin';

/**
 * Service: RxzUtilsService
 * @description: RxzUtils
 * @author: ruixiaozi
 * @since: 2.0.0
 */
@Injectable({
  provideIn: 'root',
})
export class RxzUtilsService {

  /**
   * 比较器
   * @param cmpA 数据A
   * @param cmpB 数据B
   * @param isReverse 是否反向比较
   * @returns 0/-1/1
   */
  comparator(cmpA: any, cmpB: any, isReverse?: boolean) {
    const realCmpA = isReverse ? cmpB : cmpA;
    const realCmpB = isReverse ? cmpA : cmpB;

    if (realCmpA === realCmpB) {
      return 0;
    }
    if (realCmpA > realCmpB) {
      return 1;
    }

    return -1;
  }

}
