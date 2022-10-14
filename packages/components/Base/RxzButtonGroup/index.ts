import { install } from '@/common';
import { App } from 'vue';
import _RxzButtonGroup from './RxzButtonGroup.vue';

export * from './RxzButtonGroup.declare';

export const RxzButtonGroup = {
  ..._RxzButtonGroup,
  install: install((app: App) => {
    app.component(_RxzButtonGroup.name, _RxzButtonGroup);
  }),
};
