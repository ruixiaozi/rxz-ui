import { App } from 'vue';
import { RxzForm } from './RxzForm';
import { RxzFormItem } from './RxzFormItem';
import { RxzInput } from './RxzInput';
import { RxzLabel } from './RxzLabel';
import { RxzTestUp } from './RxzTestUp';

export * from './RxzForm';
export * from './RxzFormItem';
export * from './RxzInput';
export * from './RxzLabel';
export * from './RxzTestUp';

// Form组件列表
const formComponents = [
  RxzTestUp,
  RxzForm,
  RxzFormItem,
  RxzInput,
  RxzLabel,
];

export const FormComponents = {
  install(app: App): void {
    formComponents.forEach((component) => {
      app.use(component);
    });
  },
};
