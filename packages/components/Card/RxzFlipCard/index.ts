import { App } from 'vue';
import _RxzFlipCard from './RxzFlipCard.vue';

export const RxzFlipCard = {
  ..._RxzFlipCard,
  install(app: App): void {
    app.component(_RxzFlipCard.name, _RxzFlipCard);
  },
};
