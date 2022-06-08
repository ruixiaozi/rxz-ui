import { App } from 'vue';
import RxzFlipCard from './RxzFlipCard';

// Card组件列表
const cardComponents = [RxzFlipCard];

export default {
  install(app: App): void {
    cardComponents.forEach((component) => {
      app.use(component);
    });
  },
};
