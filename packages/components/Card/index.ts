import { App } from 'vue';
import { RxzFlipCard } from './RxzFlipCard';

// Card组件列表
const cardComponents = [RxzFlipCard];

export * from './RxzFlipCard';

export const CardComponents = {
  install(app: App): void {
    cardComponents.forEach((component) => {
      app.use(component);
    });
  },
};
