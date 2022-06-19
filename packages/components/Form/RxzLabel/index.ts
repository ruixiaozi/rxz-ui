import { App } from 'vue';
import RxzLabel from './RxzLabel.vue';

export default {
  ...RxzLabel,
  install(app: App): void {
    app.component(RxzLabel.name, RxzLabel);
  },
};
