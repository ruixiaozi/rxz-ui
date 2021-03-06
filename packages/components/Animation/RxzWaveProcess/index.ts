import { install } from '@/common';
import { App } from 'vue';
import _RxzWaveProcess from './RxzWaveProcess.vue';

export const RxzWaveProcess = {
  ..._RxzWaveProcess,
  install: install((app: App) => {
    app.component(_RxzWaveProcess.name, _RxzWaveProcess);
  }),
};
