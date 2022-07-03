import { App } from 'vue';
import _RxzLoading from './RxzLoading.vue';

export const RxzLoading = {
  ..._RxzLoading,
  install(app: App): void {
    app.component(_RxzLoading.name, _RxzLoading);
  },
};
