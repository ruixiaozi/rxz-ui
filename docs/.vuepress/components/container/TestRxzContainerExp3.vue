<template>
  <rxz-container class="container">
    <template v-for="slotName in slotNames" v-slot:[slotName]>test-container</template>
  </rxz-container>
</template>

<script setup lang="ts">
import { RXZ_CONTAINER_SLOT_E } from '@/components';

defineProps<{

}>();
defineEmits<{

}>();
const slotNames = Object.values(RXZ_CONTAINER_SLOT_E);
</script>

<style lang="scss" scoped>
.container {
  width: 100%;
  height: 400px;
  background-color: grey;
}
</style>
