import { install } from '@/common';
import { App } from 'vue';
import _RxzLoading from './RxzLoading.vue';

export const RxzLoading = {
  ..._RxzLoading,
  install: install((app: App) => {
    app.component(_RxzLoading.name, _RxzLoading);
  }),
};
