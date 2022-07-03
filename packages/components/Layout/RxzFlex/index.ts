import { App } from 'vue';
import _RxzFlex from './RxzFlex.vue';

export const RxzFlex = {
  ..._RxzFlex,
  install(app: App): void {
    app.component(_RxzFlex.name, _RxzFlex);
  },
};
