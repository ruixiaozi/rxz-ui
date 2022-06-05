import { App } from 'vue';
import RxzIcon from './RxzIcon';
import RxzButton from './RxzButton';
import RxzLoading from './RxzLoading';

// Base组件列表
const baseComponents = [RxzIcon, RxzButton, RxzLoading];

export default {
  install(app: App): void {
    baseComponents.forEach((component) => {
      app.use(component);
    });
  },
};
