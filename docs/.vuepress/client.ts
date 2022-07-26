import { defineClientConfig } from '@vuepress/client';
import { RxzUI } from '@/index';
import TestRxzCountdownButton from './components/TestRxzCountdownButton.vue';
import TestRxzDialog from './components/TestRxzDialog.vue';
import TestRxzLoading from './components/TestRxzLoading.vue';
import TestRxzFlipCard from './components/TestRxzFlipCard.vue';
import TestRxzCenterLayout from './components/TestRxzCenterLayout.vue';
import TestRxzForm from './components/form/TestRxzForm.vue';
import TestRxzFormExp1 from './components/form/TestRxzFormExp1.vue';
import TestRxzFormExp2 from './components/form/TestRxzFormExp2.vue';
import TestRxzFormExp3 from './components/form/TestRxzFormExp3.vue';
import TestRxzFormExp4 from './components/form/TestRxzFormExp4.vue';
import TestRxzFormExp5 from './components/form/TestRxzFormExp5.vue';
import TestRxzFormExp6 from './components/form/TestRxzFormExp6.vue';
import TestRxzFormItem from './components/formitem/TestRxzFormItem.vue';

export default defineClientConfig({
  enhance({ app, router, siteData }) {
    app.use(RxzUI);
    app.component('TestRxzCountdownButton', TestRxzCountdownButton);
    app.component('TestRxzDialog', TestRxzDialog);
    app.component('TestRxzLoading', TestRxzLoading);
    app.component('TestRxzFlipCard', TestRxzFlipCard);
    app.component('TestRxzCenterLayout', TestRxzCenterLayout);
    app.component('TestRxzForm', TestRxzForm);
    app.component('TestRxzFormExp1', TestRxzFormExp1);
    app.component('TestRxzFormExp2', TestRxzFormExp2);
    app.component('TestRxzFormExp3', TestRxzFormExp3);
    app.component('TestRxzFormExp4', TestRxzFormExp4);
    app.component('TestRxzFormExp5', TestRxzFormExp5);
    app.component('TestRxzFormExp6', TestRxzFormExp6);
    app.component('TestRxzFormItem', TestRxzFormItem);
  },
  setup() {},
  rootComponents: [],
})
