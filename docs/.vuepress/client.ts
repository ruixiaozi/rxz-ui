import { defineClientConfig } from '@vuepress/client';
import { RxzUI } from '@/index';
import TestRxzCountdownButton from './components/TestRxzCountdownButton.vue';

export default defineClientConfig({
  enhance({ app, router, siteData }) {
    app.use(RxzUI);
    app.component('TestRxzCountdownButton', TestRxzCountdownButton);
  },
  setup() {},
  rootComponents: [],
})
