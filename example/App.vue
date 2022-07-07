<template>
  <RxzWaveProcess :process="20"></RxzWaveProcess>
  <RxzIcon></RxzIcon>
   <div>{{ $t("test") }}</div>
  <RxzLoading></RxzLoading>
  <RxzCountdownButton
    v-model="isStart"
    :seconds="10"
  ></RxzCountdownButton>
  <RxzButton @click="handleAdd()">add</RxzButton>

  <RxzForm label-width="fit-content" :form-config="formConfig" v-model="data" >
    <RxzFormItem name="test" :errorTip="{empty: '1211111111111111111111111111111111111113'}">
      <RxzLabel>一2级表单：</RxzLabel>
      <RxzInput></RxzInput>
    </RxzFormItem>
    <RxzFormItem name="test2" :errorTip="{empty: '2313'}"  v-slot:default="{itemData}">
      <RxzLabel>一级表{{itemData}}：</RxzLabel>
      <RxzInput></RxzInput>
    </RxzFormItem>
  </RxzForm>
  <RxzFlex gutter="20px">
    <div>123</div>
    <div>321</div>
  </RxzFlex>

</template>

<script lang="ts">
import { Validator } from '@/components/Form/RxzForm/RxzFormInterFace';
import { Options, Vue } from 'vue-class-component';
const zh = require('./assets/i18n/zh/common.json');
const en = require('./assets/i18n/en/common.json');
@Options({
  i18n: {
    messages: {
      zh,
      en,
    },
  },
})
export default class App extends Vue {

  isStart = true;

  validate: Validator = (value) => {
    console.log(value);
    if (!value) {
      return 'empty';
    }
  };

  formConfig: any = {
    test: {
      validators: [this.validate],
      default: 1,
    },
    test2: {
      validators: [this.validate],
      default: 1,
    },
  };

  data: any = {
    test: 3,
    test2: 1,
  };


  handleAdd() {
    this.formConfig.inner.push({
      validators: [this.validate],
      default: 25,
    });
  }

}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
