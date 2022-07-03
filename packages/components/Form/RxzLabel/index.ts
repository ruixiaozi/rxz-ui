import { App } from 'vue';
import _RxzLabel from './RxzLabel.vue';

export const RxzLabel = {
  ..._RxzLabel,
  install(app: App): void {
    app.component(_RxzLabel.name, _RxzLabel);
  },
};
