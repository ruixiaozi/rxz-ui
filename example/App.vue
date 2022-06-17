<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <RxzWaveProcess :process="20"></RxzWaveProcess>
  <RxzIcon></RxzIcon>
   <div>{{ $t("test") }}</div>
  <RxzLoading></RxzLoading>
  <RxzCountdownButton
    v-model="isStart"
    :seconds="10"
    @click="handleClick"
  ></RxzCountdownButton>
  <RxzForm :formConfig="formConfig" v-model="data" >
    <RxzFormItem name="test" v-slot:default="{itemData}">
      <p>{{itemData}}</p>
      <RxzInput></RxzInput>
    </RxzFormItem>
    <RxzFormItem name="inner">
      <RxzFormItem name="innerTest" v-slot:default="{itemData}">
        <p>{{itemData}}</p>
        <RxzInput></RxzInput>
      </RxzFormItem>
      <RxzFormItem name="innerTest2" v-slot:default="{itemData}">
        <p>{{itemData}}</p>
        <RxzInput></RxzInput>
      </RxzFormItem>
    </RxzFormItem>
  </RxzForm>

</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import { Watch } from 'vue-property-decorator';
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
    inner: {
      innerTest: {
        validators: ['2'],
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
    inner: {
      innerTest: 4,
      innerTest2: 5,
    },
  };

  handleClick(): void {
    console.log(123);
  }

  formDataChange(value: any): void {
    console.log('change', value);
  }

  @Watch('data', { deep: true })
  dataChange(val: any): void {
    console.log('change', val);
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
