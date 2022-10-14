<template>
  <rxz-search @search="handleSearch"></rxz-search>
</template>
<script>
export default {
  methods: {
    handleSearch(value) {
      console.log(value);
    }
  }
}
</script>
