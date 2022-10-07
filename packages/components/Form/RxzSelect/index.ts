import { install } from '@/common';
import { App } from 'vue';
import _RxzSelect from './RxzSelect.vue';

export * from './RxzSelect.declare';

export const RxzSelect = {
  ..._RxzSelect,
  install: install((app: App) => {
    app.component(_RxzSelect.name, _RxzSelect);
  }),
};
