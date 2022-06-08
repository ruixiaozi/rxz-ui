import { App } from 'vue';
import RxzForm from './RxzForm.vue';

export default {
  ...RxzForm,
  install(app: App): void {
    app.component(RxzForm.name, RxzForm);
  },
};
