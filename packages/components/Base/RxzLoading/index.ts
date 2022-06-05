import { App } from 'vue';
import RxzLoading from './RxzLoading.vue';

export default {
  ...RxzLoading,
  install(app: App): void {
    app.component(RxzLoading.name, RxzLoading);
  },
};
