import { App } from 'vue';
import RxzWaveProcess from './RxzWaveProcess';

// Animation组件列表
const animationComponents = [RxzWaveProcess];

export default {
  install(app: App): void {
    animationComponents.forEach((component) => {
      app.use(component);
    });
  },
};
