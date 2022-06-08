import { App } from 'vue';
import RxzForm from './RxzForm';


// Form组件列表
const formComponents = [RxzForm];

export default {
  install(app: App): void {
    formComponents.forEach((component) => {
      app.use(component);
    });
  },
};
