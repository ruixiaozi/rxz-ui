import { install } from '@/common';
import { App } from 'vue';
import _RxzSearch from './RxzSearch.vue';

export * from './RxzSearch.declare';

export const RxzSearch = {
  ..._RxzSearch,
  install: install((app: App) => {
    app.component(_RxzSearch.name, _RxzSearch);
  }),
};
