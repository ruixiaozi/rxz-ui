import { install } from '@/common';
import { App } from 'vue';
import _RxzLabel from './RxzLabel.vue';

export const RxzLabel = {
  ..._RxzLabel,
  install: install((app: App) => {
    app.component(_RxzLabel.name, _RxzLabel);
  }),
};
