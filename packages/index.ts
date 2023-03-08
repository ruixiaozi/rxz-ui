import { App } from 'vue';
import { RxzComponents } from './components';
import { RxzProperties } from './properties';
import { RxzDirectives } from './directives';
import { RxzDataMap, useRxzDataMap, useRxzI18n, useRxzSSR } from './use';
// 全局引入样式
import './style/global.css';
// 引入icon初始化
import './icons/index';

export * from './components';
export * from './use';
export * from './properties';
export * from './directives';

export interface RxzOption {
  i18n?: any;
  dataMaps?: RxzDataMap;
  isSSR?: boolean;
}

export const RxzUI = {
  install: (app: App, { i18n = {}, dataMaps = {}, isSSR = false }: RxzOption = {}) => {
    useRxzSSR().isSSR.value = isSSR;
    useRxzDataMap().appendDataMap(dataMaps);
    useRxzI18n().configI18n({ i18n });
    // 注册组件
    RxzComponents.forEach((item) => {
      app.component(item.__name || item.name, item);
    });
    // 注册properties
    Object.entries(RxzProperties).forEach(([key, value]) => {
      app.config.globalProperties[key] = value;
    });
    // 注册指令
    Object.entries(RxzDirectives).forEach(([key, value]) => {
      app.directive(
        key.slice(1)
          .replace(/(?<k1>[a-z])(?<k2>[A-Z])/ug, '$1-$2')
          .toLowerCase(),
        value,
      );
    });
    // 执行注册在初始化运行的回调，仅允许在非SSR模式下
    useRxzSSR().runClientInitNoSSR(app);
  },
};
