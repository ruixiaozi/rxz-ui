<template>
  <rxz-search @search="handleSearch" ref="search"></rxz-search>
  <rxz-button @click="handleClick">搜索</rxz-button>
</template>
<script>
export default {
  methods: {
    handleSearch(value) {
      console.log(value);
    },
    handleClick() {
      this.$refs.search.search();
    }
  }
}
</script>
