import { getService, install } from '@/common';
import { App } from 'vue';
import { RxzPopoverService } from './RxzPopover.service';

export * from './RxzPopover.declare';

const _RxzPopover = getService(RxzPopoverService);

(_RxzPopover as any).install = install((app: App) => {
  // 注册全局属性
  app.config.globalProperties.$RxzPopover = _RxzPopover;
});

export const RxzPopover = _RxzPopover;

