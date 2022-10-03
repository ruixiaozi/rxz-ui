import { App } from 'vue';
import { RxzIcon } from './RxzIcon';
import { RxzButton } from './RxzButton';
import { RxzCountdownButton } from './RxzCountdownButton';
import { install } from '@/common';
import { RxzTip } from './RxzTip';
import { RxzPagination } from './RxzPagination';

export * from './RxzIcon';
export * from './RxzButton';
export * from './RxzCountdownButton';
export * from './RxzTip';
export * from './RxzPagination';

// Base组件列表
const baseComponents = [
  RxzPagination,
  RxzTip,
  RxzIcon,
  RxzButton,
  RxzCountdownButton,
];

export const BaseComponents = {
  install: install((app: App) => {
    baseComponents.forEach((component) => {
      app.use(component);
    });
  }),
};
