import { install } from '@/common';
import { App } from 'vue';
import _RxzContainer from './RxzContainer.vue';

export * from './RxzContainer.declare';

export const RxzContainer = {
  ..._RxzContainer,
  install: install((app: App) => {
    app.component(_RxzContainer.name, _RxzContainer);
  }),
};
