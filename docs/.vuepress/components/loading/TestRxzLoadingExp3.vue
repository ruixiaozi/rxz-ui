<template>
  <div>
    <rxz-button @click="handleClick">进入loading</rxz-button>
  </div>
</template>
<script>
import { h } from '@vue/runtime-core';
export default {
  methods: {
    handleClick() {
      this.$RxzLoading.show({
        content: h('div', 'Loading...')
      });
      setTimeout(() => {
        this.$RxzLoading.hide();
      }, 1000);
    }
  }
};
</script>
