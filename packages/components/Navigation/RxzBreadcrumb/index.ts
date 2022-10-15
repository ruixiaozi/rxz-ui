import { install } from '@/common';
import { App } from 'vue';
import _RxzBreadcrumb from './RxzBreadcrumb.vue';

export * from './RxzBreadcrumb.declare';

export const RxzBreadcrumb = {
  ..._RxzBreadcrumb,
  install: install((app: App) => {
    app.component(_RxzBreadcrumb.name, _RxzBreadcrumb);
  }),
};
