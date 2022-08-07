import { install } from '@/common';
import { App } from 'vue';
import _RxzTextarea from './RxzTextarea.vue';

export * from './RxzTextarea.declare';

export const RxzTextarea = {
  ..._RxzTextarea,
  install: install((app: App) => {
    app.component(_RxzTextarea.name, _RxzTextarea);
  }),
};
