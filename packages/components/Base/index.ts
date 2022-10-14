import { App } from 'vue';
import { RxzIcon } from './RxzIcon';
import { RxzButton } from './RxzButton';
import { RxzCountdownButton } from './RxzCountdownButton';
import { install } from '@/common';
import { RxzTip } from './RxzTip';
import { RxzPagination } from './RxzPagination';
import { RxzButtonGroup } from './RxzButtonGroup';
import { RxzSearch } from './RxzSearch';

export * from './RxzIcon';
export * from './RxzButton';
export * from './RxzCountdownButton';
export * from './RxzTip';
export * from './RxzPagination';
export * from './RxzButtonGroup';
export * from './RxzSearch';

// Base组件列表
const baseComponents = [
  RxzSearch,
  RxzButtonGroup,
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
