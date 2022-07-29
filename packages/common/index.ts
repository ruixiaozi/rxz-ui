import { createI18n } from '@/i18n';
import { useReflectiveInjector } from '@tanbo/vue-di-plugin';
import { App } from 'vue';

export interface RxzOption {
  i18n?: any;
}

export const install = (cbk: {(app: App):void}) => (app: any, { i18n = {} }: RxzOption = {}) => {
  if (!app.$rxz) {
    app.$rxz = true;
    app.use(createI18n(i18n));
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
        return useReflectiveInjector().get(service);
      },
    });
  }
};

