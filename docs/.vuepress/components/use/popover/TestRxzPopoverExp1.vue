<template>
  <rxz-button ref="bt" @click="open()">打开Popover</rxz-button>
</template>

<script setup lang="ts">
import { RxzButton } from '@/components';
import { RXZ_POPOVER_POS_E } from '@/components/template';
import { useRxzPopover } from '@/use';
import { ref, h } from 'vue';

defineProps<{

}>();
defineEmits<{

}>();
const bt = ref<InstanceType<typeof RxzButton>>();
let key: string | undefined = '';
const open = () => {
  key = useRxzPopover().openPopover(bt.value!, RXZ_POPOVER_POS_E.bottomright, {
    content: h(RxzButton as any, {
    type: 'primary',
    onClick: () => {
      console.log('click button');
    }
  }, '点击'),
  showArrow: false,
  key,
  allowOuterClose: true,
  })
}
</script>

<style lang="scss" scoped>

</style>
