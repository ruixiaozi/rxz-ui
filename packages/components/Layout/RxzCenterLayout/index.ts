import { App } from 'vue';
import RxzCenterLayout from './RxzCenterLayout.vue';

export default {
  ...RxzCenterLayout,
  install(app: App): void {
    app.component(RxzCenterLayout.name, RxzCenterLayout);
  },
};
