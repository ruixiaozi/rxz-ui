<template>
  <rxz-button ref="bt" @click="handleOpen()">打开Modal</rxz-button>
  <rxz-button ref="bt" @click="handleOpenDrawer()">打开抽屉</rxz-button>
</template>
<script>
import { RxzButton, RxzFlex } from '@/components';
import { h } from '@vue/runtime-core';
export default {
  methods: {
    handleOpen() {
      const key = this.$RxzModal.create({
        title: '我是标题',
        content: '我是内容',
        footer: h(RxzFlex, {
          justify: 'center',
          gutter: '8px',
        }, [h(RxzButton, {
          onClick: () => {
            this.$RxzModal.close(key);
          }
        }, {
          default: '关闭'
        })]),
      });
    },
    handleOpenDrawer() {
      const key = this.$RxzModal.create({
        title: '我是标题',
        content: '我是内容',
        drawer: true,
        footer: h(RxzFlex, {
          justify: 'center',
          gutter: '8px',
        }, [h(RxzButton, {
          onClick: () => {
            this.$RxzModal.close(key);
          }
        }, {
          default: '关闭'
        })]),
      });
    }
  }
}
</script>
