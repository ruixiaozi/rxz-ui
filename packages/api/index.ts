import { install } from '@/common';
import { App } from 'vue';
import { RxzModal } from './RxzModal';
import { RxzLoading } from './RxzLoading';

export * from './RxzModal';
export * from './RxzLoading';

// 所有api列表
const apis = [
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
