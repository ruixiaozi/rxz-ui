import { defineClientConfig } from '@vuepress/client';
import { RxzUI } from '@/index';
import TestRxzCountdownButton from './components/TestRxzCountdownButton.vue';
import TestRxzDialog from './components/TestRxzDialog.vue';
import TestRxzLoading from './components/TestRxzLoading.vue';

export default defineClientConfig({
  enhance({ app, router, siteData }) {
    app.use(RxzUI);
    app.component('TestRxzCountdownButton', TestRxzCountdownButton);
    app.component('TestRxzDialog', TestRxzDialog);
    app.component('TestRxzLoading', TestRxzLoading);
  },
  setup() {},
  rootComponents: [],
})
