import { App } from 'vue';
import RxzCountdownButton from './RxzCountdownButton.vue';

export default {
  ...RxzCountdownButton,
  install(app: App): void {
    app.component(RxzCountdownButton.name, RxzCountdownButton);
  },
};
