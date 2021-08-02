<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <rxz-button bgColor="red" hoverBgColor="green">test</rxz-button>
    <rxz-button type="info2">test</rxz-button>
    <rxz-button type="primary">test</rxz-button>
    <rxz-count-down-button type="primary" v-model="isStart" :seconds="4">
      <div slot="countdownValue">2</div>
      1
    </rxz-count-down-button>
    <rxz-button type="success" loading> test</rxz-button>

  </div>
</template>

<script>
export default {
  name: "App",
  components: {},
  data(){
    return {
      isStart:true
    }
  }
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
