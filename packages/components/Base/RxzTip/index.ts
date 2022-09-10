import { install } from '@/common';
import { App } from 'vue';
import _RxzTip from './RxzTip.vue';

export * from './RxzTip.declare';

export const RxzTip = {
  ..._RxzTip,
  install: install((app: App) => {
    app.component(_RxzTip.name, _RxzTip);
  }),
};
