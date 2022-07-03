import { App } from 'vue';
import _RxzCenterLayout from './RxzCenterLayout.vue';

export const RxzCenterLayout = {
  ..._RxzCenterLayout,
  install(app: App): void {
    app.component(_RxzCenterLayout.name, _RxzCenterLayout);
  },
};
