import { RxzDataMapService } from './../api/RxzDataMap/RxzDataMap.service';
import { RxzI18n } from '@/i18n';
import { useReflectiveInjector } from '@tanbo/vue-di-plugin';
import { App } from 'vue';
import { RxzDataMap } from '@/api/RxzDataMap/RxzDataMap.declare';

const injector = useReflectiveInjector();

export interface RxzOption {
  i18n?: any;
  dataMaps?: RxzDataMap;
  isSSR?: boolean;
}

export function getService<T>(service: Class<T>): T {
  return injector.get(service);
}

export const install = (cbk: {(app: App):void}) => (app: any, { i18n = {}, dataMaps = {}, isSSR = false }: RxzOption = {}) => {
  if (!app.$rxz) {
    app.$rxz = true;
    app.use(RxzI18n, { i18n });
    getService(RxzDataMapService).appendMap(dataMaps);
    if (!isSSR) {
      // 引入所有图标
      const request = require.context('../icons', false, /\.svg$/u);
      request.keys().forEach(request);
    }
  }
  cbk(app);
};

export type Class<T = any> = new (...args: Array<any>)=> T;

export const InjectService = (service: Class) => (target: any, key?: any, descriptorOrIndex?: any) => {
  // 只有两个参数，属性装饰器
  if (target !== undefined && key !== undefined && descriptorOrIndex === undefined) {
    Reflect.defineProperty(target, key, {
      enumerable: true,
      configurable: false,
      get() {
        return injector.get(service);
      },
    });
  }
};


export * from './utils';
