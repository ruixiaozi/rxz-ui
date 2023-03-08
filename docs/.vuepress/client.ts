import { defineClientConfig } from '@vuepress/client';
import { RxzOption, RxzUI } from '@/index';
import { components } from './components';

declare const __VUEPRESS_SSR__: any;

export default defineClientConfig({
  enhance({ app, router, siteData }) {
    app.use(RxzUI, {
      isSSR: __VUEPRESS_SSR__,
      i18n: {
        zh: {
          max_custom: '最大值为{0}',
          custom_validator: '最小值为{min}',
          custom_message: '我是自定义中文',
        },
        en: {
          max_custom: 'max value is {0}',
          custom_validator: 'min value is {min}',
          custom_message: 'I am custom English',
        },
      },
      dataMaps: {
        TESK_STATUS: {
          0: {
            lable: '成功',
            value: 0,
          },
          1: {
            lable: '失败',
            value: 1,
          },
        },
      },
    } as RxzOption);
    components.forEach(item => {
      app.component(item.__name || item.name, item);
    })
  },
  setup() {},
  rootComponents: [],
});
