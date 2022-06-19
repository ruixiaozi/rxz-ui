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
  <RxzForm :formConfig="formConfig" v-model="data" >
    <RxzFormItem name="test">
      <RxzLabel>一级表单：</RxzLabel>
      <RxzInput></RxzInput>
    </RxzFormItem>
    <RxzFormItem name="test2"  v-slot:default="{itemData}">
      <RxzLabel>一级表{{itemData}}：</RxzLabel>
      <RxzInput></RxzInput>
    </RxzFormItem>
    <RxzFormItem name="inner" labelWidth="fit-content">
      <RxzLabel>子表单1：</RxzLabel>
      <RxzFlex direction="vertical">
        <RxzFormItem v-for="(item, inx) in formConfig.inner" :name="inx" :key="inx" v-slot:default="{itemData}">
          <RxzLabel>{{itemData}}</RxzLabel>
          <RxzInput></RxzInput>
        </RxzFormItem>
      </RxzFlex>
    </RxzFormItem>
    <RxzFormItem name="inner2" labelWidth="100px">
      <RxzLabel>子表单2：</RxzLabel>
      <RxzFlex>
         <RxzFormItem name="innerTest" v-slot:default="{itemData}">
          <RxzLabel>{{itemData}}</RxzLabel>
          <RxzInput></RxzInput>
        </RxzFormItem>
        <RxzFormItem name="innerTest2" v-slot:default="{itemData}">
          <RxzLabel>{{itemData}}</RxzLabel>
          <RxzInput></RxzInput>
        </RxzFormItem>
      </RxzFlex>

    </RxzFormItem>
  </RxzForm>
  <RxzFlex gutter="20px">
    <div>123</div>
    <div>321</div>
  </RxzFlex>

</template>

<script lang="ts">
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

  formConfig = {
    test: {
      validators: ['1'],
      default: 1,
    },
    test2: {
      validators: ['1'],
      default: 1,
    },
    inner: [
      {
        validators: ['1'],
        default: 2,
      },
    ],
    inner2: {
      innerTest: {
        validators: ['1'],
        default: 2,
      },
      innerTest2: {
        validators: ['3'],
        default: 3,
      },
    },
  };

  data: any = {
    test: 3,
    test2: 1,
    inner: [1],
    inner2: {
      innerTest: 4,
      innerTest2: 5,
    },
  };


  handleAdd() {
    this.formConfig.inner.push({
      validators: ['1'],
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
