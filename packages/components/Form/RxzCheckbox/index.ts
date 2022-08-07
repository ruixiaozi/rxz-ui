import { install } from '@/common';
import { App } from 'vue';
import _RxzCheckbox from './RxzCheckbox.vue';

export * from './RxzCheckbox.declare';

export const RxzCheckbox = {
  ..._RxzCheckbox,
  install: install((app: App) => {
    app.component(_RxzCheckbox.name, _RxzCheckbox);
  }),
};
