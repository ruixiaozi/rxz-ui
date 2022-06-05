import { App } from 'vue';
import RxzCenterLayout from './RxzCenterLayout';

// Layout组件列表
const layoutComponents = [RxzCenterLayout];

export default {
  install(app: App): void {
    layoutComponents.forEach((component) => {
      app.use(component);
    });
  },
};
