/**
 * useRxzDataMap
 * @description: RxzDataMap
 * @author: ruixiaozi
 * @since: 2.0.0
 */
import { useRxzI18n } from './useRxzI18n';

export interface RxzDataMapItem {
  lable: string;
  value: string | number;
  [key: string]: any;
}

export interface RxzDataMap {
  [key: string]: {
    // 此value与item中的value一一对应
    [value in string | number]: RxzDataMapItem;
  };
}


const { i18n } = useRxzI18n();

let dataMaps: RxzDataMap = {};

// 添加数据映射对象
function appendDataMap(newDataMpas: RxzDataMap) {
  dataMaps = {
    ...dataMaps,
    ...newDataMpas,
  };
}

/**
 * 获取datamap的label
 * @param key 映射key
 * @param value 映射值
 * @param isSource 是否不进行i18n转换
 * @returns 返回label值或者转换后的值
 */
function getDataMapLabel(key: string, value: string | number, isSource?: boolean) {
  const sourceLabel = dataMaps[key]?.[value]?.lable || '';
  return isSource ? sourceLabel : i18n(sourceLabel);
}

/**
 * 将映射转换为数组格式
 * @param key 映射key
 * @param isSource 是否不进行i18n转换
 * @returns 映射数组
 */
function toDataMapArray(key: string, isSource?: boolean) {
  const sourceArr = Object.values(dataMaps[key] || {});
  return isSource ? sourceArr : sourceArr.map((item) => ({ ...item, lable: i18n(item.lable) }));
}

/**
 * 将映射转换为值数组格式
 * @param key 映射key
 * @returns 值数组
 */
function toDataMapValueArray(key: string) {
  return Object.keys(dataMaps[key] || {});
}


export function useRxzDataMap() {
  return {
    appendDataMap,
    getDataMapLabel,
    toDataMapArray,
    toDataMapValueArray,
  };
}
