<template>
  <rxz-tabs :tabs="items" v-model="active">
    <div v-if="active?.key === items[0].key">我是tab1</div>
    <div v-if="active?.key === items[1].key">我是tab2</div>
    <div v-if="active?.key === items[2].key">我是tab3</div>
  </rxz-tabs>
</template>

<script setup lang="ts">import { ref } from 'vue';

defineProps<{

}>();
defineEmits<{

}>();
const items = [
  {
    name: '标签1',
    key: '1',
  },
  {
    name: '标签2',
    key: '2',
  },
  {
    name: '标签3',
    key: '3',
  },
];
const active = ref(items[0]);
</script>

<style lang="scss" scoped>

</style>
