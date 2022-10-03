import { install } from '@/common';
import { App } from 'vue';
import { RxzTable } from './RxzTable';
import { RxzColumnRender } from './RxzColumnRender';

export * from './RxzTable';
export * from './RxzColumnRender';

// Table组件列表
const tableComponents = [
  RxzColumnRender,
  RxzTable,
];

export const TableComponents = {
  install: install((app: App) => {
    tableComponents.forEach((component) => {
      app.use(component);
    });
  }),
};
