import { App } from 'vue';
import RxzForm from './RxzForm';
import RxzFormItem from './RxzFormItem';
import RxzInput from './RxzInput';


// Form组件列表
const formComponents = [RxzForm, RxzFormItem, RxzInput];

export default {
  install(app: App): void {
    formComponents.forEach((component) => {
      app.use(component);
    });
  },
};
