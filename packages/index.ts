import { App } from 'vue';
import Components from './components';
import { i18n } from './i18n';

// 全局引入样式
import '@/style/normalize.css';
import '@/style/font-awesome.min.css';

export default {
  install(app: App): void{
    app.use(i18n);
    app.use(Components);
  },
};
