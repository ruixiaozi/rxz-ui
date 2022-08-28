import { createApp } from 'vue';
import App from './App.vue';
// 这里 @ 就是在 tsconfig.json 以及 vue.config.js 配置的 packages 路径
import { RxzUI } from '@/index';
const zh = require('./assets/i18n/zh/common.json');
const en = require('./assets/i18n/en/common.json');
const app = createApp(App);
app.use(RxzUI, {
  i18n: {
    zh,
    en,
  },
});
app.mount('#app');
