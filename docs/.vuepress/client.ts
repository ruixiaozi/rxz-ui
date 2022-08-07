import { defineClientConfig } from '@vuepress/client';
import { RxzUI } from '@/index';
import { RxzOption } from '@/common';
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
import TestRxzFormItemExp1 from './components/formitem/TestRxzFormItemExp1.vue';
import TestRxzFormItemExp2 from './components/formitem/TestRxzFormItemExp2.vue';
import TestRxzLabel from './components/label/TestRxzLabel.vue';
import TestRxzInput from './components/input/TestRxzInput.vue';
import TestRxzInputExp1 from './components/input/TestRxzInputExp1.vue';
import TestRxzInputExp2 from './components/input/TestRxzInputExp2.vue';
import TestRxzInputExp3 from './components/input/TestRxzInputExp3.vue';
import TestRxzInputExp4 from './components/input/TestRxzInputExp4.vue';
import TestRxzInputExp5 from './components/input/TestRxzInputExp5.vue';
import TestRxzInputExp6 from './components/input/TestRxzInputExp6.vue';
import TestRxzInputExp7 from './components/input/TestRxzInputExp7.vue';
import TestRxzRadio from './components/radio/TestRxzRadio.vue';
import TestRxzRadioExp1 from './components/radio/TestRxzRadioExp1.vue';
import TestRxzRadioExp2 from './components/radio/TestRxzRadioExp2.vue';
import TestRxzRadioExp3 from './components/radio/TestRxzRadioExp3.vue';
import TestRxzSwitch from './components/switch/TestRxzSwitch.vue';
import TestRxzSwitchExp1 from './components/switch/TestRxzSwitchExp1.vue';
import TestRxzSwitchExp2 from './components/switch/TestRxzSwitchExp2.vue';
import TestRxzSwitchExp3 from './components/switch/TestRxzSwitchExp3.vue';
import TestRxzTextarea from './components/textarea/TestRxzTextarea.vue';
import TestRxzTextareaExp1 from './components/textarea/TestRxzTextareaExp1.vue';
import TestRxzTextareaExp2 from './components/textarea/TestRxzTextareaExp2.vue';
import TestRxzTextareaExp3 from './components/textarea/TestRxzTextareaExp3.vue';
import TestRxzCheckbox from './components/checkbox/TestRxzCheckbox.vue';
import TestRxzCheckboxExp1 from './components/checkbox/TestRxzCheckboxExp1.vue';
import TestRxzCheckboxExp2 from './components/checkbox/TestRxzCheckboxExp2.vue';
import TestRxzCheckboxExp3 from './components/checkbox/TestRxzCheckboxExp3.vue';

export default defineClientConfig({
  enhance({ app, router, siteData }) {
    app.use(RxzUI, {
      i18n: {
        zh: {
          max_custom: '最大值为{0}',
          custom_validator: '最小值为{min}'
        },
        en: {
          max_custom: 'max value is {0}',
          custom_validator: 'min value is {min}'
        },
      }
    } as RxzOption);
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
    app.component('TestRxzFormItemExp1', TestRxzFormItemExp1);
    app.component('TestRxzFormItemExp2', TestRxzFormItemExp2);
    app.component('TestRxzLabel', TestRxzLabel);
    app.component('TestRxzInput', TestRxzInput);
    app.component('TestRxzInputExp1', TestRxzInputExp1);
    app.component('TestRxzInputExp2', TestRxzInputExp2);
    app.component('TestRxzInputExp3', TestRxzInputExp3);
    app.component('TestRxzInputExp4', TestRxzInputExp4);
    app.component('TestRxzInputExp5', TestRxzInputExp5);
    app.component('TestRxzInputExp6', TestRxzInputExp6);
    app.component('TestRxzInputExp7', TestRxzInputExp7);
    app.component('TestRxzRadio', TestRxzRadio);
    app.component('TestRxzRadioExp1', TestRxzRadioExp1);
    app.component('TestRxzRadioExp2', TestRxzRadioExp2);
    app.component('TestRxzRadioExp3', TestRxzRadioExp3);
    app.component('TestRxzSwitch', TestRxzSwitch);
    app.component('TestRxzSwitchExp1', TestRxzSwitchExp1);
    app.component('TestRxzSwitchExp2', TestRxzSwitchExp2);
    app.component('TestRxzSwitchExp3', TestRxzSwitchExp3);
    app.component('TestRxzTextarea', TestRxzTextarea);
    app.component('TestRxzTextareaExp1', TestRxzTextareaExp1);
    app.component('TestRxzTextareaExp2', TestRxzTextareaExp2);
    app.component('TestRxzTextareaExp3', TestRxzTextareaExp3);
    app.component('TestRxzCheckbox', TestRxzCheckbox);
    app.component('TestRxzCheckboxExp1', TestRxzCheckboxExp1);
    app.component('TestRxzCheckboxExp2', TestRxzCheckboxExp2);
    app.component('TestRxzCheckboxExp3', TestRxzCheckboxExp3);
  },
  setup() {},
  rootComponents: [],
})
