import { App } from 'vue';
import RxzDialog from './RxzDialog.vue';

export default {
  ...RxzDialog,
  install(app: App): void {
    app.component(RxzDialog.name, RxzDialog);
  },
};
