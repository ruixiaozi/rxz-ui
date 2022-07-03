import { useReflectiveInjector } from '@tanbo/vue-di-plugin';
import { App } from 'vue';

export const install = (cbk: {(app: App):void}) => (app: any) => {
  if (!app.$rxz) {
    app.$rxz = true;
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

