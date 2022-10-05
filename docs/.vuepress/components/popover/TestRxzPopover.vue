<template>
  <rxz-button ref="bt" @click="open()">打开Popover</rxz-button>
</template>
<script>
import { POPOVER_POS_E } from '@/components/Inner/RxzPopper/RxzPopper.declare'
export default {
  data() {
    return {
      content: 1,
    }
  },
  methods: {
    open() {
      this.$RxzPopover.open({
        sourceEl: this.$refs.bt,
        pos: POPOVER_POS_E.bottomright,
        content: String(this.content++),
        showArrow: false,
        gap: 0,
        key: 'rxz-test-1',
        allowOuterClose: true,
      });
    },
  }
}
</script>
