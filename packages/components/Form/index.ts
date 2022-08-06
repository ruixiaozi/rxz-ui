import { install } from '@/common';
import { App } from 'vue';
import { RxzForm } from './RxzForm';
import { RxzFormItem } from './RxzFormItem';
import { RxzInput } from './RxzInput';
import { RxzLabel } from './RxzLabel';
import { RxzRadio } from './RxzRadio';
import { RxzSwitch } from './RxzSwitch';
import { RxzTextarea } from './RxzTextarea';

export * from './RxzForm';
export * from './RxzFormItem';
export * from './RxzInput';
export * from './RxzLabel';
export * from './RxzRadio';
export * from './RxzSwitch';
export * from './RxzTextarea';

// Form组件列表
const formComponents = [
  RxzTextarea,
  RxzSwitch,
  RxzRadio,
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
