import { getService, install } from '@/common';
import { App } from 'vue';
import { RxzLoadingService } from './RxzLoading.service';

export * from './RxzLoading.declare';

const _RxzLoading = getService(RxzLoadingService);

(_RxzLoading as any).install = install((app: App) => {
  // 注册全局属性
  app.config.globalProperties.$RxzLoading = _RxzLoading;
});

export const RxzLoading = _RxzLoading;

