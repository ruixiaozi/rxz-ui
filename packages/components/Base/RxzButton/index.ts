import { App } from 'vue';
import _RxzButton from './RxzButton.vue';

export const RxzButton = {
  ..._RxzButton,
  install(app: App): void {
    app.component(_RxzButton.name, _RxzButton);
  },
};
