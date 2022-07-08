import { install } from '@/common';
import { App } from 'vue';
import _RxzInput from './RxzInput.vue';

export * from './RxzInput.declare';

export const RxzInput = {
  ..._RxzInput,
  install: install((app: App) => {
    app.component(_RxzInput.name, _RxzInput);
  }),
};
