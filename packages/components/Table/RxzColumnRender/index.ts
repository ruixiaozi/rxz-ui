import { install } from '@/common';
import { App } from 'vue';
import _RxzColumnRender from './RxzColumnRender.vue';

export * from './RxzColumnRender.declare';

export const RxzColumnRender = {
  ..._RxzColumnRender,
  install: install((app: App) => {
    app.component(_RxzColumnRender.name, _RxzColumnRender);
  }),
};
