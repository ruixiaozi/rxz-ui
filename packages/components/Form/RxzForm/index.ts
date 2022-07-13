import { install } from '@/common';
import { App } from 'vue';
import _RxzForm from './RxzForm.vue';

export * from './RxzForm.declare';

export const RxzForm = {
  ..._RxzForm,
  install: install((app: App) => {
    app.component(_RxzForm.name, _RxzForm);
  }),
};
