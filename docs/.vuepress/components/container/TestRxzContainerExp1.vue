<template>
  <rxz-button @click="changePos">切换位置</rxz-button>
  <rxz-container class="container" :position="position">
    test-container
  </rxz-container>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { RXZ_CONTAINER_POSITION_E } from '@/components/layout/RxzContainer';
defineProps<{

}>();
defineEmits<{

}>();
const position = ref(RXZ_CONTAINER_POSITION_E.CENTER);
let index = 0;
const positions = Object.values(RXZ_CONTAINER_POSITION_E);

const changePos = () => {
  position.value = positions[index++];
  if (index >= positions.length) {
    index = 0;
  }
}
</script>

<style lang="scss" scoped>
.container {
  width: 100%;
  height: 400px;
  background-color: grey;
}
</style>
