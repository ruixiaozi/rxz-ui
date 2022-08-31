import { App } from 'vue';
import { RxzIcon } from './RxzIcon';
import { RxzButton } from './RxzButton';
import { RxzCountdownButton } from './RxzCountdownButton';
import { install } from '@/common';

export * from './RxzIcon';
export * from './RxzButton';
export * from './RxzCountdownButton';

// Base组件列表
const baseComponents = [
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
