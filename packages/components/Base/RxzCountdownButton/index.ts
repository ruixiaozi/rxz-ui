import { App } from 'vue';
import _RxzCountdownButton from './RxzCountdownButton.vue';

export const RxzCountdownButton = {
  ..._RxzCountdownButton,
  install(app: App): void {
    app.component(_RxzCountdownButton.name, _RxzCountdownButton);
  },
};
