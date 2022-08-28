import { App } from 'vue';
import { RxzIcon } from './RxzIcon';
import { RxzButton } from './RxzButton';
import { RxzCountdownButton } from './RxzCountdownButton';
import { RxzTheme } from './RxzTheme';
import { install } from '@/common';

export * from './RxzIcon';
export * from './RxzButton';
export * from './RxzCountdownButton';
export * from './RxzTheme';

// Base组件列表
const baseComponents = [
  RxzIcon,
  RxzButton,
  RxzCountdownButton,
  RxzTheme,
];

export const BaseComponents = {
  install: install((app: App) => {
    baseComponents.forEach((component) => {
      app.use(component);
    });
  }),
};
