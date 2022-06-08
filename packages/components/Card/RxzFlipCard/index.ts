import { App } from 'vue';
import RxzFlipCard from './RxzFlipCard.vue';

export default {
  ...RxzFlipCard,
  install(app: App): void {
    app.component(RxzFlipCard.name, RxzFlipCard);
  },
};
