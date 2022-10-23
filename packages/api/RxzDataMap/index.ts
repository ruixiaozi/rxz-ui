import { getService, install } from '@/common';
import { App } from 'vue';
import { RxzDataMapService } from './RxzDataMap.service';

export * from './RxzDataMap.declare';

const _RxzDataMap = getService(RxzDataMapService);

(_RxzDataMap as any).install = install((app: App) => {
  // 注册全局属性
  app.config.globalProperties.$RxzDataMap = _RxzDataMap;
});

export const RxzDataMap = _RxzDataMap;

