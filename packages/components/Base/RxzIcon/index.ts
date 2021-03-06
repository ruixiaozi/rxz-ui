import { install } from '@/common';
import { App } from 'vue';
import _RxzIcon from './RxzIcon.vue';

export const RxzIcon = {
  ..._RxzIcon,
  install: install((app: App) => {
    app.component(_RxzIcon.name, _RxzIcon);
  }),
};
