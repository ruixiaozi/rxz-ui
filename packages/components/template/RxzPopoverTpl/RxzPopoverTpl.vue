<template>
  <transition name="opacity-anim" appear>
    <RxzContainer
      v-show="isShow"
      class="rxz-popover"
      :class="[type]"
      :position="position"
      v-bind="$attrs"
      :data-rxz-popover="popoverKey"
      >
        <div class="rxz-popover-content" :style="{
          padding: padding ? '8px' : '0'
        }" :class="{radius}">
          <span v-if="showArrow" class="rxz-popover-content-arrow" :class="[pos]"></span>
          <slot></slot>
        </div>
      </RxzContainer>
  </transition>
</template>

<script setup lang="ts">
import { RXZ_CONTAINER_POSITION_E, RxzContainer } from '@/components/layout';
import { defineProps, defineEmits, defineExpose, ref, computed, watch } from 'vue';
import define, { rxzPopoverPosMap } from './RxzPopoverTpl.define';
const props = defineProps(define.rxzPopoverTplProps);
const emits = defineEmits(define.rxzPopoverTplEmits);

const isShow = ref(false);
const position = computed(() => rxzPopoverPosMap[props.pos] || RXZ_CONTAINER_POSITION_E.BOTTOM_CENTER);

watch(isShow, (newV, oldV) => {
  if (newV !== oldV) {
    emits('showChange', newV);
  }
});

defineExpose({
  isShow,
});

</script>

<style lang="scss" scoped>
@import "./RxzPopoverTpl.scss";
</style>
