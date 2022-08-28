import { merge as _merge } from 'lodash';
import { App } from 'vue';
const zh = require('./zh.json');
const en = require('./en.json');
// 国际化语言资源
let messages = {
  // 英文
  en,
  // 中文
  zh,
};

let local = 'en';

/**
 * 获取
 * @returns {string}
 */
export const getLocal = () => {
  const _localStorage = typeof localStorage === 'undefined' ? null : localStorage;
  const _navigator = typeof navigator === 'undefined' ? null : navigator;

  // 如果缓存中存在，则直接返回
  const myLocale = _localStorage?.getItem('my_locale');
  if (myLocale) {
    return myLocale;
  }
  // 否则读取当前网页语言
  const localName = _navigator?.language.indexOf('zh') === -1 ? 'en' : 'zh';
  // 设置缓存
  _localStorage?.setItem('my_locale', localName);
  return localName;
};

export const getI18n = (value: string, params?: { [key: string | number]: string }): string => {
  if (messages[local]?.[value]) {
    let res = String(messages[local][value]);
    if (params && typeof params === 'object') {
      res = Object.entries(params).reduce((re, [key, param]) => re.replace(`{${key}}`, param), res);
    }
    return res;
  }
  return value;
};

export const RxzI18n = {
  install: (app: App, { i18n = {} }) => {
    local = getLocal();
    messages = typeof i18n === 'object' ? _merge(messages, i18n) : messages;
    app.config.globalProperties.$i18n = getI18n;
  },
};
