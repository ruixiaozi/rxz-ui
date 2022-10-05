import { install } from '@/common';
import { App } from 'vue';
import { RxzModal } from './RxzModal';
import { RxzLoading } from './RxzLoading';
import { RxzTips } from './RxzTips';
import { RxzMessageBox } from './RxzMessageBox';
import { RxzPopover } from './RxzPopover';

export * from './RxzModal';
export * from './RxzLoading';
export * from './RxzTips';
export * from './RxzMessageBox';
export * from './RxzPopover';

// 所有api列表
const apis = [
  RxzPopover,
  RxzMessageBox,
  RxzTips,
  RxzModal,
  RxzLoading,
];


export const APIs = {
  install: install((app: App) => {
    // 遍历注册所有api
    apis.forEach((api: any) => {
      app.use(api);
    });
  }),
};
