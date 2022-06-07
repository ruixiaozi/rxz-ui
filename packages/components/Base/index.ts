import { App } from 'vue';
import RxzIcon from './RxzIcon';
import RxzButton from './RxzButton';
import RxzLoading from './RxzLoading';
import RxzCountdownButton from './RxzCountdownButton';
import RxzDialog from './RxzDialog';

// Base组件列表
const baseComponents = [RxzIcon, RxzButton, RxzLoading, RxzCountdownButton, RxzDialog];

export default {
  install(app: App): void {
    baseComponents.forEach((component) => {
      app.use(component);
    });
  },
};
