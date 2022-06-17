import { App } from 'vue';
import RxzInput from './RxzInput.vue';

export default {
  ...RxzInput,
  install(app: App): void {
    app.component(RxzInput.name, RxzInput);
  },
};
