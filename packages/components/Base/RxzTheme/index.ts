import { App } from 'vue';
import _RxzTheme from './RxzTheme.vue';

export const RxzTheme = {
  ..._RxzTheme,
  install(app: App): void {
    app.component(_RxzTheme.name, _RxzTheme);
  },
};
