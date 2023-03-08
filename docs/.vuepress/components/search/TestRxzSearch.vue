<template>
  <rxz-search @search="handleSearch"></rxz-search>
</template>

<script setup lang="ts">
defineProps<{

}>();
defineEmits<{

}>();
const handleSearch = (value: string) => {
  console.log(value);
}
</script>

<style lang="scss" scoped>

</style>
