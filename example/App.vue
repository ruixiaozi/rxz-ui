<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <RxzWaveProcess :process="20"></RxzWaveProcess>
  <RxzIcon></RxzIcon>
  <RxzLoading></RxzLoading>
  <div>{{ $t('test') }}</div>
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
export default class App extends Vue {}
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
