import { App } from 'vue';
import _RxzDialog from './RxzDialog.vue';

export const RxzDialog = {
  ..._RxzDialog,
  install(app: App): void {
    app.component(_RxzDialog.name, _RxzDialog);
  },
};
