import { App } from 'vue';
import { install } from '@/common';
import { RxzBreadcrumb } from './RxzBreadcrumb';

export * from './RxzBreadcrumb';

// 导航组件列表
const navigationComponents = [RxzBreadcrumb];

export const NavigationComponents = {
  install: install((app: App) => {
    navigationComponents.forEach((component) => {
      app.use(component);
    });
  }),
};
