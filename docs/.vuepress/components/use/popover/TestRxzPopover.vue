<template>
  <rxz-button ref="bt" @click="open()">打开Popover</rxz-button>
</template>

<script setup lang="ts">
import { RxzButton } from '@/components';
import { RXZ_POPOVER_POS_E } from '@/components/template';
import { useRxzPopover } from '@/use';
import { ref } from 'vue';

defineProps<{

}>();
defineEmits<{

}>();
const bt = ref<InstanceType<typeof RxzButton>>();
const content = ref(1);
const open = () => {
  useRxzPopover().openPopover(bt.value!, RXZ_POPOVER_POS_E.bottomright, {
    content: String(content.value++),
    showArrow: false,
    gap: 0,
    key: 'rxz-test-1',
    allowOuterClose: true,
  })
}
</script>

<style lang="scss" scoped>

</style>
