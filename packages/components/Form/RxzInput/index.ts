import { App } from 'vue';
import _RxzInput from './RxzInput.vue';

export const RxzInput = {
  ..._RxzInput,
  install(app: App): void {
    app.component(_RxzInput.name, _RxzInput);
  },
};
