import { App } from 'vue';
import _RxzIcon from './RxzIcon.vue';

export const RxzIcon = {
  ..._RxzIcon,
  install(app: App): void {
    app.component(_RxzIcon.name, _RxzIcon);
  },
};
