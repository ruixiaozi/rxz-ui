import { getService, install } from '@/common';
import { App } from 'vue';
import { RxzTipsService } from './RxzTips.service';

export * from './RxzTips.declare';

const _RxzTips = getService(RxzTipsService);

(_RxzTips as any).install = install((app: App) => {
  // 注册全局属性
  app.config.globalProperties.$RxzTips = _RxzTips;
});

export const RxzTips = _RxzTips;

