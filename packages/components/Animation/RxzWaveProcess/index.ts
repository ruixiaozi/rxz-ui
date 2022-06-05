import { App } from 'vue';
import RxzWaveProcess from './RxzWaveProcess.vue';

export default {
  ...RxzWaveProcess,
  install(app: App): void {
    app.component(RxzWaveProcess.name, RxzWaveProcess);
  },
};
