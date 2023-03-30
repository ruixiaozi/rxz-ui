/**
 * useRxzI18n
 * @description: RxzI18n
 * @author: ruixiaozi
 * @since: 2.0.0
 */
import { merge as _merge } from 'lodash';
import { useRxzSSR } from './useRxzSSR';
import en from '../i18n/en.json';
import zh from '../i18n/zh.json';
import { ref } from 'vue';

export interface RxzI18nOption {
  i18n: any;
  local?: 'en' | 'zh';
}


const { isSSR } = useRxzSSR();

// 国际化语言资源
let messages: any = {
  // 英文
  en,
  // 中文
  zh,
};

const local = ref('en');

/**
 * 获取
 * @returns {string}
 */
function getLocal() {
  if (isSSR.value) {
    return 'zh';
  }

  // 如果缓存中存在，则直接返回
  const myLocale = localStorage?.getItem('my_locale');
  if (myLocale) {
    return myLocale;
  }
  // 否则读取当前网页语言
  const localName = navigator?.language.indexOf('zh') === -1 ? 'en' : 'zh';
  // 设置缓存
  localStorage?.setItem('my_locale', localName);
  return localName;
}

/**
 * 进行国际化转换
 * @param value 原始值
 * @param params 参数，用于转换替换
 * @returns 转换后的值
 */
function i18n(value: string, params?: Record<string | number, any>): string {
  if (messages[local.value]?.[value]) {
    let res = String(messages[local.value][value]);
    if (params && typeof params === 'object') {
      res = Object.entries(params).reduce((re, [key, param]) => re.replace(`{${key}}`, param), res);
    }
    return res;
  }
  return value;
}

/**
 * 配置国际化
 * @param option 选项
 */
function configI18n(option: RxzI18nOption) {
  local.value = option.local || getLocal();
  messages = typeof option.i18n === 'object' ? _merge(messages, option.i18n) : messages;
}


export function useRxzI18n() {
  return {
    i18n,
    configI18n,
    local,
  };
}
