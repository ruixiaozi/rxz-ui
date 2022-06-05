import { App } from 'vue';
import Animation from './Animation';
import Base from './Base';
import Layout from './Layout';

// 所有组件列表
const components = [Animation, Base, Layout];

export default {
  install(app: App): void{
    // 遍历注册所有组件
    components.forEach((component) => {
      app.use(component);
    });
  },
};
