<template>
  <transition :name="`move-anim`" appear>
    <div v-if="display" class="rxz-tip" :class="[`rxz-tip-${type}`]" v-bind="$attrs">
      <RxzIcon :name="type" :size="16"></RxzIcon>
      <span class="rxz-tip-content">
        <slot>{{ type }}</slot>
      </span>
      <RxzIcon v-if="closable" @click="hidden" class="rxz-tip-close" name="close" :size="12"></RxzIcon>
    </div>
  </transition>
</template>

<script setup lang="ts">
import { defineProps, defineEmits, defineExpose, ref } from 'vue';
import { RxzIcon } from '@/components/base/RxzIcon';
import define from './RxzTip.define';
defineProps(define.rxzTipProps);
const emits = defineEmits(define.rxzTipEmits);

const display = ref(true);

const show = () => {
  display.value = true;
  emits('show');
};

const hidden = () => {
  display.value = false;
  emits('hidden');
};

defineExpose({
  show,
  hidden,
});

</script>

<style lang="scss" scoped>
@import "./RxzTip.scss";
</style>
