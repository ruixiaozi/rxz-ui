<template>
  <span
    class="rxz-icon"
    :class="[
      'rxz-icon-type-' + type,
    ]"
    :style="{
      width: `${size}px`,
      height: `${size}px`,
      transform: `rotate(${realRotate}deg)`
    }"
    v-bind="$attrs"
  >
    <svg>
      <use :href="`#${name}`"></use>
    </svg>
  </span>
</template>

<script setup lang="ts">
import { defineProps, defineEmits, computed, ref, onMounted, watch } from 'vue';
import define from './RxzIcon.define';
const props = defineProps(define.rxzIconProps);
defineEmits(define.rxzIconEmits);

let timer: any;

let spinnerRotate = ref(0);

const timeSplit = computed(() => (props.step === 0 ? null : 1000 / (360 / Math.abs(props.step))));
const realRotate = computed(() => (props.rotate + spinnerRotate.value) % 360);

const spinnerIcon = (): void => {
  if (!timeSplit.value) {
    return;
  }

  const delay = timeSplit.value;

  if (props.spinner && !timer) {
    timer = setInterval(() => {
      if (timeSplit.value !== delay) {
        clearInterval(timer);
        timer = null;
        spinnerIcon();
        return;
      }
      spinnerRotate.value += props.step;
    }, delay);
  } else if (timer) {
    clearInterval(timer);
    timer = null;
  }
};

watch(() => props.spinner, () => {
  spinnerIcon();
});

onMounted(() => {
  spinnerIcon();
});

</script>

<style lang="scss" scoped>
@import "./RxzIcon.scss";
</style>
