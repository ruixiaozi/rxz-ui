import { install } from '@/common';
import { App } from 'vue';
import _RxzFlipCard from './RxzFlipCard.vue';

export const RxzFlipCard = {
  ..._RxzFlipCard,
  install: install((app: App) => {
    app.component(_RxzFlipCard.name, _RxzFlipCard);
  }),
};
