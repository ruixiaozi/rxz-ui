import { install } from '@/common';
import { App } from 'vue';
import _RxzButton from './RxzButton.vue';

export * from './RxzButton.declare';

export const RxzButton = {
  ..._RxzButton,
  install: install((app: App) => {
    app.component(_RxzButton.name, _RxzButton);
  }),
};
