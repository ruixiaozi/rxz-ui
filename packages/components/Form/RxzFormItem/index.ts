import { App } from 'vue';
import _RxzFormItem from './RxzFormItem.vue';

export const RxzFormItem = {
  ..._RxzFormItem,
  install(app: App): void {
    app.component(_RxzFormItem.name, _RxzFormItem);
  },
};
