import { App } from 'vue';
import { RxzWaveProcess } from './RxzWaveProcess';

// Animation组件列表
const animationComponents = [RxzWaveProcess];

export * from './RxzWaveProcess';

export const AnimationComponents = {
  install(app: App): void {
    animationComponents.forEach((component) => {
      app.use(component);
    });
  },
};
