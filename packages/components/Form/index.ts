import { App } from 'vue';
import RxzForm from './RxzForm';
import RxzFormItem from './RxzFormItem';
import RxzInput from './RxzInput';
import RxzLabel from './RxzLabel';


// Form组件列表
const formComponents = [
  RxzForm,
  RxzFormItem,
  RxzInput,
  RxzLabel,
];

export default {
  install(app: App): void {
    formComponents.forEach((component) => {
      app.use(component);
    });
  },
};
