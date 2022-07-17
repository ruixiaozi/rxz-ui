import { install } from '@/common';
import { App } from 'vue';
import _RxzTheme from './RxzTheme.vue';

export * from './RxzTheme.declare';

export const RxzTheme = {
  ..._RxzTheme,
  install: install((app: App) => {
    app.component(_RxzTheme.name, _RxzTheme);
  }),
};
