import { createI18n as _createI18n } from 'vue-i18n';
import { merge as _merge } from 'lodash';
const zh = require('./zh.json');
const en = require('./en.json');
// 国际化语言资源
const messages = {
  // 英文
  en,
  // 中文
  zh,
};

/**
 * 获取
 * @returns {string}
 */
function getLocal() {
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
}

// 创建i18n实例
export const createI18n = (localMessage = {}) => {
  const mergeMessages = typeof localMessage === 'object' ? _merge(messages, localMessage) : messages;
  return _createI18n({
    locale: getLocal(),
    messages: mergeMessages,
  });
};
