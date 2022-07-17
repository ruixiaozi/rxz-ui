import { install } from '@/common';
import { App } from 'vue';
import _RxzCountdownButton from './RxzCountdownButton.vue';

export * from './RxzCountdownButton.declare';

export const RxzCountdownButton = {
  ..._RxzCountdownButton,
  install: install((app: App) => {
    app.component(_RxzCountdownButton.name, _RxzCountdownButton);
  }),
};
