<template>
  <rxz-button-group :buttons="buttons" :link="true"></rxz-button-group>
</template>

<script setup lang="ts">import { RxzButtonGroupItem } from '@/components/advance';
import { RXZ_BUTTON_TYPE_ENUM } from '@/components/base/RxzButton';

defineProps<{

}>();
defineEmits<{

}>();
const buttons: RxzButtonGroupItem[] = [
  {
    text: '新建',
    type: RXZ_BUTTON_TYPE_ENUM.primary,
  },
  {
    text: '编辑',
    onClick: () => {
      console.log('编辑');
    }
  },
  {
    text: '批量删除'
  },
  {
    text: '关闭',
    onClick: () => {
      console.log('关闭');
    }
  },
];
</script>

<style lang="scss" scoped>

</style>
