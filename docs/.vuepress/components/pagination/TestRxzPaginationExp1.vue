<template>
  <rxz-pagination v-model="pagination" :pageStart="1"></rxz-pagination>
</template>
<script lang="ts">
export default {
  data () {
    return {
      pagination: {
        page: 2,
        pageSize: 10,
        total: 100,
      }
    }
  }
};
</script>
