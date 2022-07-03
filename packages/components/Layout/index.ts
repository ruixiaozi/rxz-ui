import { App } from 'vue';
import { RxzCenterLayout } from './RxzCenterLayout';
import { RxzFlex } from './RxzFlex';

// Layout组件列表
const layoutComponents = [RxzCenterLayout, RxzFlex];

export * from './RxzCenterLayout';
export * from './RxzFlex';

export const LayoutComponents = {
  install(app: App): void {
    layoutComponents.forEach((component) => {
      app.use(component);
    });
  },
};
