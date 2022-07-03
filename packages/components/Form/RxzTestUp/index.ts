import { App } from 'vue';
import _RxzTestUp from './RxzTestUp.vue';

export * from './RxzTestUp.declare';

export const RxzTestUp = {
  ..._RxzTestUp,
  install(app: App): void {
    app.component(_RxzTestUp.name, _RxzTestUp);
  },
};
