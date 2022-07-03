import { install } from '@/common';
import { App } from 'vue';
import { RxzForm } from './RxzForm';
import { RxzFormItem } from './RxzFormItem';
import { RxzInput } from './RxzInput';
import { RxzLabel } from './RxzLabel';

export * from './RxzForm';
export * from './RxzFormItem';
export * from './RxzInput';
export * from './RxzLabel';

// Form组件列表
const formComponents = [
  RxzForm,
  RxzFormItem,
  RxzInput,
  RxzLabel,
];

export const FormComponents = {
  install: install((app: App) => {
    formComponents.forEach((component) => {
      app.use(component);
    });
  }),
};
