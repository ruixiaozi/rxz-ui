<template>
  <iframe class="rxz-iframe-observe" ref="iframe"></iframe>
</template>

<script setup lang="ts">
import { defineProps, defineEmits, ref, onMounted, nextTick } from 'vue';
import define from './RxzIframeObserveTpl.define';
defineProps(define.rxzIframeObserveTplProps);
const emits = defineEmits(define.rxzIframeObserveTplEmits);


const iframe = ref<HTMLIFrameElement>();

onMounted(() => {
  nextTick(() => {
    iframe?.value?.contentWindow?.addEventListener('resize', (event) => {
      emits('resize', event);
    });
  });
});

</script>

<style lang="scss" scoped>
@import "./RxzIframeObserveTpl.scss";
</style>
