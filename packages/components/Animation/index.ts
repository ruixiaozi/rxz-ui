import { install } from '@/common';
import { App } from 'vue';
import { RxzWaveProcess } from './RxzWaveProcess';

// Animation组件列表
const animationComponents = [RxzWaveProcess];

export * from './RxzWaveProcess';

export const AnimationComponents = {
  install: install((app: App) => {
    animationComponents.forEach((component) => {
      app.use(component);
    });
  }),
};
