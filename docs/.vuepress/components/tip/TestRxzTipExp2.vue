<template>
  <rxz-tip ref="tip" :type='RXZ_TIP_TYPE_ENUM.success'>success</rxz-tip>
  <br />
  <div>
    <rxz-button @click="handleShow">显示</rxz-button>
    <rxz-button @click="handleHidden">隐藏</rxz-button>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { RxzTip, RXZ_TIP_TYPE_ENUM } from '@/components/base/RxzTip'
const tip = ref<InstanceType<typeof RxzTip>>();

const handleShow = () => {
  tip.value?.show();
}

const handleHidden = () => {
  tip.value?.hidden();
}
</script>
<style lang="scss" scoped>
</style>
