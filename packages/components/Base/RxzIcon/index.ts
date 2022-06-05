import { App } from 'vue';
import RxzIcon from './RxzIcon.vue';

export default {
  ...RxzIcon,
  install(app: App): void {
    app.component(RxzIcon.name, RxzIcon);
  },
};
