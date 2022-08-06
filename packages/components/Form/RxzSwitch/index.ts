import { install } from '@/common';
import { App } from 'vue';
import _RxzSwitch from './RxzSwitch.vue';

export * from './RxzSwitch.declare';

export const RxzSwitch = {
  ..._RxzSwitch,
  install: install((app: App) => {
    app.component(_RxzSwitch.name, _RxzSwitch);
  }),
};
