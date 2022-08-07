import { getService, install } from '@/common';
import { App } from 'vue';
import { RxzModalService } from './RxzModal.service';

export * from './RxzModal.declare';

const _RxzModal = getService<RxzModalService>(RxzModalService);

(_RxzModal as any).install = install((app: App) => {
  // 遍历注册所有组件
  app.config.globalProperties.$RxzModal = _RxzModal;
});

export const RxzModal = _RxzModal;
