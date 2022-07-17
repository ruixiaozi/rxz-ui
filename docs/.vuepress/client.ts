import { defineClientConfig } from '@vuepress/client';
import { RxzUI } from '@/index';

export default defineClientConfig({
  enhance({ app, router, siteData }) {
    app.use(RxzUI);
  },
  setup() {},
  rootComponents: [],
})
