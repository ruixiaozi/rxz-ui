<template>
  <div>
    <rxz-tip :type='RXZ_TIP_TYPE_ENUM.information' closable>information</rxz-tip>
    <rxz-tip :type='RXZ_TIP_TYPE_ENUM.success' closable>success</rxz-tip>
    <rxz-tip :type='RXZ_TIP_TYPE_ENUM.warning' closable>warning</rxz-tip>
    <rxz-tip :type='RXZ_TIP_TYPE_ENUM.error' closable>error</rxz-tip>
  </div>
</template>
<script setup lang="ts">
import { RXZ_TIP_TYPE_ENUM } from '@/components/base/RxzTip'
defineProps<{

}>();
defineEmits<{

}>();
</script>
<style lang="scss" scoped>
div > * {
  margin-top: 8px;
}
</style>
