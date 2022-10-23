import { install } from '@/common';
import { App } from 'vue';
import _RxzMenu from './RxzMenu.vue';

export * from './RxzMenu.declare';

export const RxzMenu = {
  ..._RxzMenu,
  install: install((app: App) => {
    app.component(_RxzMenu.name, _RxzMenu);
  }),
};
