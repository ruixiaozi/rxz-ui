<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <rxz-button bgColor="red" hoverBgColor="green">test</rxz-button>
    <rxz-button type="info2">test</rxz-button>
    <rxz-button type="primary">test</rxz-button>

    <rxz-button type="success"> test</rxz-button>

  </div>
</template>

<script>
export default {
  name: "App",
  components: {},
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
