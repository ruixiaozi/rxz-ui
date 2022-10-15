import { getI18n } from '@/i18n';
import { Injectable } from '@tanbo/vue-di-plugin';
import { RxzDataMap } from './RxzDataMap.declare';

/**
 * Service: RxzDataMapService
 * @description: RxzDataMap
 * @author: ruixiaozi
 * @since: 2.0.0
 */
@Injectable({
  provideIn: 'root',
})
export class RxzDataMapService {

  private dataMaps: RxzDataMap = {};

  appendMap(newDataMpas: RxzDataMap) {
    this.dataMaps = {
      ...this.dataMaps,
      ...newDataMpas,
    };
  }

  getLabel(key: string, value: string | number, isSource?: boolean) {
    const sourceLabel = this.dataMaps[key]?.[value]?.lable || '';
    return isSource ? sourceLabel : getI18n(sourceLabel);
  }

  toArray(key: string, isSource?: boolean) {
    const sourceArr = Object.values(this.dataMaps[key] || {});
    return isSource ? sourceArr : sourceArr.map((item) => ({ ...item, lable: getI18n(item.lable) }));
  }

  toValueArray(key: string) {
    return Object.keys(this.dataMaps[key] || {});
  }

}
