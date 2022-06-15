import { App } from 'vue';
import RxzForm from './RxzForm';
import RxzFormItem from './RxzFormItem';


// Form组件列表
const formComponents = [RxzForm, RxzFormItem];

export default {
  install(app: App): void {
    formComponents.forEach((component) => {
      app.use(component);
    });
  },
};
