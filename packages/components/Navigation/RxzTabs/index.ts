import { install } from '@/common';
import { App } from 'vue';
import _RxzTabs from './RxzTabs.vue';

export * from './RxzTabs.declare';

export const RxzTabs = {
  ..._RxzTabs,
  install: install((app: App) => {
    app.component(_RxzTabs.name, _RxzTabs);
  }),
};
