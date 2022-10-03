import { install } from '@/common';
import { App } from 'vue';
import _RxzTable from './RxzTable.vue';

export * from './RxzTable.declare';

export const RxzTable = {
  ..._RxzTable,
  install: install((app: App) => {
    app.component(_RxzTable.name, _RxzTable);
  }),
};
