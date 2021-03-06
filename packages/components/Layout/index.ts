import { install } from '@/common';
import { App } from 'vue';
import { RxzCenterLayout } from './RxzCenterLayout';
import { RxzFlex } from './RxzFlex';

// Layout组件列表
const layoutComponents = [RxzCenterLayout, RxzFlex];

export * from './RxzCenterLayout';
export * from './RxzFlex';

export const LayoutComponents = {
  install: install((app: App) => {
    layoutComponents.forEach((component) => {
      app.use(component);
    });
  }),
};
