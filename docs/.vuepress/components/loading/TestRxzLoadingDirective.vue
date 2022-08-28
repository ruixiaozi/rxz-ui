<template>
  <div>
    <rxz-container class="content" v-rxz-loading="showLoading">
      我是文本内容
      <rxz-button @click="handleTry">试一下</rxz-button>
    </rxz-container>
    <rxz-button @click="refresh" type="primary">刷新</rxz-button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      showLoading: false,
    }
  },
  methods: {
    refresh() {
      this.showLoading = true;
      setTimeout(() => {
        this.showLoading = false;
      }, 2000);
    },
    handleTry() {
      console.log('try');
    }
  }
};
</script>
<style scoped>
.content {
  width: 200px;
  height: 200px;
  position: relative;
  margin-bottom: 20px;
}
</style>
