import { install } from '@/common';
import { App } from 'vue';
import { RxzCenterLayout } from './RxzCenterLayout';
import { RxzFlex } from './RxzFlex';
import { RxzContainer } from './RxzContainer';

// Layout组件列表
const layoutComponents = [
  RxzContainer,
  RxzCenterLayout,
  RxzFlex,
];

export * from './RxzCenterLayout';
export * from './RxzFlex';
export * from './RxzContainer';

export const LayoutComponents = {
  install: install((app: App) => {
    layoutComponents.forEach((component) => {
      app.use(component);
    });
  }),
};
