import { getService, install } from '@/common';
import { App } from 'vue';
import { RxzMessageBoxService } from './RxzMessageBox.service';

export * from './RxzMessageBox.declare';

const _RxzMessageBox = getService(RxzMessageBoxService);

(_RxzMessageBox as any).install = install((app: App) => {
  // 注册全局属性
  app.config.globalProperties.$RxzMessageBox = _RxzMessageBox;
});

export const RxzMessageBox = _RxzMessageBox;

