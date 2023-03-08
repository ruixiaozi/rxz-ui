<template>
  <rxz-textarea
    style="position: relative"
    v-rxz-resize-observe="handleResize"
  ></rxz-textarea>
</template>

<script setup lang="ts">
defineProps<{

}>();
defineEmits<{

}>();
const handleResize = (event: Event) => {
  console.log(event);
}
</script>

<style lang="scss" scoped>

</style>
