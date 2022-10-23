import { App } from 'vue';
import { install } from '@/common';
import { RxzBreadcrumb } from './RxzBreadcrumb';
import { RxzMenu } from './RxzMenu';
import { RxzTabs } from './RxzTabs';

export * from './RxzBreadcrumb';
export * from './RxzMenu';
export * from './RxzTabs';

// 导航组件列表
const navigationComponents = [
  RxzTabs,
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
