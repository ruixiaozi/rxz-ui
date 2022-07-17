import { install } from '@/common';
import { App } from 'vue';
import _RxzFlex from './RxzFlex.vue';

export * from './RxzFlex.declare';

export const RxzFlex = {
  ..._RxzFlex,
  install: install((app: App) => {
    app.component(_RxzFlex.name, _RxzFlex);
  }),
};
