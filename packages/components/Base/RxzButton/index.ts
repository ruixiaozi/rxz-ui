import { install } from '@/common';
import { App } from 'vue';
import _RxzButton from './RxzButton.vue';

export const RxzButton = {
  ..._RxzButton,
  install: install((app: App) => {
    app.component(_RxzButton.name, _RxzButton);
  }),
};
