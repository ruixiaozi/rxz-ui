<template>
  <RxzWaveProcess :process="20"></RxzWaveProcess>
  <RxzIcon></RxzIcon>
   <div>{{ $t("test") }}</div>
  <RxzLoading></RxzLoading>
  <RxzCountdownButton
    v-model="isStart"
    :seconds="10"
  ></RxzCountdownButton>
  <RxzIcon name="sdf" :overflow="123"></RxzIcon>
  <RxzButton @click="handleAdd()">add</RxzButton>
  <div overflow="sdf"></div>
  <RxzForm :form-config="formConfig" v-model="data" ref="form">
    <RxzFormItem name="test" :errorTip="{'test': '1211111111111111111111111111111111111113'}">
      <RxzLabel>一2级表单：</RxzLabel>
      <RxzInput></RxzInput>
    </RxzFormItem>
    <RxzFormItem name="test2" :errorTip="{empty: '2313'}"  v-slot:default="{itemData}">
      <RxzLabel>一级表{{itemData}}：</RxzLabel>
      <RxzInput></RxzInput>
    </RxzFormItem>
    <RxzForm label-width="fit-content" name="inner" direction="horizontal">
      <RxzFormItem name="inner1" :errorTip="{empty: '444'}"  v-slot:default="{itemData}">
        <RxzLabel>er级表{{itemData}}：</RxzLabel>
        <RxzInput></RxzInput>
      </RxzFormItem>
      <RxzFormItem name="inner2" :errorTip="{empty: '555'}">
        <RxzLabel>er级表222：</RxzLabel>
        <RxzInput></RxzInput>
      </RxzFormItem>
    </RxzForm>
    <RxzFormItem >
      <RxzLabel :required="true">我是子：</RxzLabel>
      <RxzForm  name="inners" >
        <RxzFormItem name="inners1" :errorTip="{empty: '444'}"  v-slot:default="{itemData}">
          <RxzLabel>er1级表{{itemData}}：</RxzLabel>
          <RxzInput></RxzInput>
        </RxzFormItem>
        <RxzFormItem name="inners2" :errorTip="{empty: '555'}">
          <RxzLabel>er1级表222：</RxzLabel>
          <RxzInput></RxzInput>
        </RxzFormItem>
    </RxzForm>
    </RxzFormItem>
  </RxzForm>
  <RxzFlex gutter="20px">
    <div>123</div>
    <div>321</div>
  </RxzFlex>

  <div></div>


  <div></div>
  <div ></div>
  <rxz-dialog overflow></rxz-dialog>
  <rxz-dialog></rxz-dialog>

</template>

<script lang="ts">
import { RxzFormCnt } from '@/components/Form/RxzForm/RxzForm.component';
import { RxzValidators } from '@/definition';
import { Options, Vue } from 'vue-class-component';
import { Ref } from 'vue-property-decorator';
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

  @Ref('form')
  readonly form!: RxzFormCnt;

  formConfig: any = {
    test: {
      validators: [RxzValidators.required],
      default: '',
    },
    test2: {
      validators: [RxzValidators.maxLength(5)],
      default: 'asdfafs',
    },
    inner: {
      inner1: {
        validators: [RxzValidators.min(5), RxzValidators.max(10)],
        default: 50,
      },
      inner2: {
        validators: [],
        default: 1,
      },
    },
    inners: {
      inners1: {
        validators: [],
        default: 1,
      },
      inners2: {
        validators: [],
        default: 1,
      },
    },
  };

  data: any = {

  };


  handleAdd() {
    const res = this.form.check();
    console.log(res);

    /* this.formConfig.inner.push({
      validators: [],
      default: 25,
    }); */
  }

  handleBlur() {
    console.log(11231231);
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
