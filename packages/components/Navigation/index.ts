import { App } from 'vue';
import { install } from '@/common';
import { RxzBreadcrumb } from './RxzBreadcrumb';
import { RxzMenu } from './RxzMenu';

export * from './RxzBreadcrumb';
export * from './RxzMenu';

// 导航组件列表
const navigationComponents = [
  RxzBreadcrumb,
  RxzMenu,
];

export const NavigationComponents = {
  install: install((app: App) => {
    navigationComponents.forEach((component) => {
      app.use(component);
    });
  }),
};
