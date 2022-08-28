<template>
  <div>
    <rxz-button @click="handleClick">进入loading</rxz-button>
  </div>
</template>
<script>
export default {
  methods: {
    handleClick() {
      this.$RxzLoading.show({
        bgColor: '#40e0d032',
        color: '#ff1493'
      });
      setTimeout(() => {
        this.$RxzLoading.hide();
      }, 1000);
    }
  }
};
</script>
