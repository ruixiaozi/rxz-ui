import { install } from '@/common';
import { App } from 'vue';
import _RxzPagination from './RxzPagination.vue';

export * from './RxzPagination.declare';

export const RxzPagination = {
  ..._RxzPagination,
  install: install((app: App) => {
    app.component(_RxzPagination.name, _RxzPagination);
  }),
};
