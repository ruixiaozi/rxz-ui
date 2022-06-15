import { App } from 'vue';
import RxzFormItem from './RxzFormItem.vue';

export default {
  ...RxzFormItem,
  install(app: App): void {
    app.component(RxzFormItem.name, RxzFormItem);
  },
};
