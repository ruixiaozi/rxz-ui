import { App } from 'vue';
import RxzFlex from './RxzFlex.vue';

export default {
  ...RxzFlex,
  install(app: App): void {
    app.component(RxzFlex.name, RxzFlex);
  },
};
