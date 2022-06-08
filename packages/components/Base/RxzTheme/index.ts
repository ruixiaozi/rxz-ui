import { App } from 'vue';
import RxzTheme from './RxzTheme.vue';

export default {
  ...RxzTheme,
  install(app: App): void {
    app.component(RxzTheme.name, RxzTheme);
  },
};
