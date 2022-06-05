import { App } from 'vue';
import RxzButton from './RxzButton.vue';

export default {
  ...RxzButton,
  install(app: App): void {
    app.component(RxzButton.name, RxzButton);
  },
};
