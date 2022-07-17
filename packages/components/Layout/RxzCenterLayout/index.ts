import { install } from '@/common';
import { App } from 'vue';
import _RxzCenterLayout from './RxzCenterLayout.vue';

export * from './RxzCenterLayout.declare';

export const RxzCenterLayout = {
  ..._RxzCenterLayout,
  install: install((app: App) => {
    app.component(_RxzCenterLayout.name, _RxzCenterLayout);
  }),
};
