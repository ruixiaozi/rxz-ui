import { install } from '@/common';
import { App } from 'vue';
import _RxzFormItem from './RxzFormItem.vue';

export * from './RxzFormItem.declare';

export const RxzFormItem = {
  ..._RxzFormItem,
  install: install((app: App) => {
    app.component(_RxzFormItem.name, _RxzFormItem);
  }),
};
