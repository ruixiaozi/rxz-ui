import { App } from 'vue';
import _RxzWaveProcess from './RxzWaveProcess.vue';

export const RxzWaveProcess = {
  ..._RxzWaveProcess,
  install(app: App): void {
    app.component(_RxzWaveProcess.name, _RxzWaveProcess);
  },
};
