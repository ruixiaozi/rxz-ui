import { App } from 'vue';

export const install = (cbk: {(app: App):void}) => (app: any) => {
  if (!app.$rxz) {
    app.$rxz = true;
    console.log('rxz');
  }
  cbk(app);
};
