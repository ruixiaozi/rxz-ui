import { install } from '@/common';
import { App } from 'vue';
import _RxzDialog from './RxzDialog.vue';

export const RxzDialog = {
  ..._RxzDialog,
  install: install((app: App) => {
    app.component(_RxzDialog.name, _RxzDialog);
  }),
};
