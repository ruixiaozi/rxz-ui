import { App } from 'vue';
import { RxzIcon } from './RxzIcon';
import { RxzButton } from './RxzButton';
import { RxzLoading } from './RxzLoading';
import { RxzCountdownButton } from './RxzCountdownButton';
import { RxzDialog } from './RxzDialog';
import { RxzTheme } from './RxzTheme';

export * from './RxzIcon';
export * from './RxzButton';
export * from './RxzLoading';
export * from './RxzCountdownButton';
export * from './RxzDialog';
export * from './RxzTheme';

// Base组件列表
const baseComponents = [
  RxzIcon,
  RxzButton,
  RxzLoading,
  RxzCountdownButton,
  RxzDialog,
  RxzTheme,
];

export const BaseComponents = {
  install(app: App): void {
    baseComponents.forEach((component) => {
      app.use(component);
    });
  },
};
