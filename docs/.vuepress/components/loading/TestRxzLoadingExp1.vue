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
        text: 'Loading',
      });
      setTimeout(() => {
        this.$RxzLoading.hide();
      }, 1000);
    }
  }
};
</script>
