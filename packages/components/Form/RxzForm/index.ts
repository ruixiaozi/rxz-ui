import { App } from 'vue';
import _RxzForm from './RxzForm.vue';

export * from './RxzForm.declare';

export const RxzForm = {
  ..._RxzForm,
  install(app: App): void {
    app.component(_RxzForm.name, _RxzForm);
  },
};
