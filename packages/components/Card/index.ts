import { install } from '@/common';
import { App } from 'vue';
import { RxzFlipCard } from './RxzFlipCard';

// Card组件列表
const cardComponents = [RxzFlipCard];

export * from './RxzFlipCard';

export const CardComponents = {
  install: install((app: App) => {
    cardComponents.forEach((component) => {
      app.use(component);
    });
  }),
};
