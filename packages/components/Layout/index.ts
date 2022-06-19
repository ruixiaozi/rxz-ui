import { App } from 'vue';
import RxzCenterLayout from './RxzCenterLayout';
import RxzFlex from './RxzFlex';

// Layout组件列表
const layoutComponents = [RxzCenterLayout, RxzFlex];

export default {
  install(app: App): void {
    layoutComponents.forEach((component) => {
      app.use(component);
    });
  },
};
