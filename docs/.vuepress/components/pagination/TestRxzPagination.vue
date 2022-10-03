<template>
  <rxz-pagination v-model="pagination"></rxz-pagination>
</template>
<script lang="ts">
export default {
  data () {
    return {
      pagination: {
        page: 6,
        pageSize: 10,
        total: 101,
      }
    }
  }
};
</script>
