<template>
  <RxzButton v-bind="$attrs" :disabled="isStart" :type="type">
    <!-- 倒计时显示的文字 -->
    <slot name="countdownValue" v-if="isStart"></slot>
    <span v-if="isStart">({{ sec }}s)</span>
    <!-- 普通显示的文字(默认插槽) -->
    <slot v-if="!isStart"></slot>
  </RxzButton>
</template>

<script setup lang="ts">
import { defineProps, defineEmits, ref, onMounted, computed, watch } from 'vue';
import { RxzButton } from '@/components/base/RxzButton';
import define from './RxzCountdownButton.define';
const props = defineProps(define.rxzCountdownButtonProps);
const emits = defineEmits(define.rxzCountdownButtonEmits);

let timer: any;

const sec = ref(0);

const isStart = computed<boolean>({
  get() {
    return props.modelValue;
  },
  set(value) {
    emits('update:modelValue', value);
  },
});

const countDown = () => {
  if (--sec.value <= 0) {
    isStart.value = false;
  }
};

const operate = () => {
  if (isStart.value && !timer) {
    timer = setInterval(() => {
      countDown();
    }, 1000);
    sec.value = props.seconds;
  } else if (timer) {
    clearInterval(timer);
    timer = null;
  }
};

watch(isStart, () => {
  operate();
});


onMounted(() => {
  sec.value = props.seconds;
  operate();
});


</script>

<style lang="scss" scoped>
@import "./RxzCountdownButton.scss";
</style>
