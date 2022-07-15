import { install } from '@/common';
import { App } from 'vue';
import _RxzRadio from './RxzRadio.vue';

export * from './RxzRadio.declare';

export const RxzRadio = {
  ..._RxzRadio,
  install: install((app: App) => {
    app.component(_RxzRadio.name, _RxzRadio);
  }),
};
