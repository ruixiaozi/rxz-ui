<template>
  <rxz-button ref="bt" @click="open()">打开Popover</rxz-button>
</template>
<script>
import { POPOVER_POS_E } from '@/components/Inner/RxzPopper/RxzPopper.declare'
import { h } from '@vue/runtime-core';
import { RxzButton } from '@/components';

export default {
  methods: {
    data() {
      return {
        key: '',
      }
    },
    open() {
      this.key = this.$RxzPopover.open({
        sourceEl: this.$refs.bt,
        pos: POPOVER_POS_E.bottomright,
        content: h(RxzButton, {
          type: 'primary',
          onClick: () => {
            console.log('click button');
          }
        }, '点击'),
        showArrow: false,
        key: this.key,
        allowOuterClose: true,
      });
    },
  }
}
</script>
