<template>
  <button
    v-if="!link"
    class="rxz-button"
    v-bind="$attrs"
    @mouseover="isHover = true"
    @mouseout="isHover = false"
    :type="nativeType"
    :disabled="disabled || isLoading"
    :class="[
      type ? 'rxz-button-' + type : '',
      { 'rxz-button-is-disabled': disabled || isLoading },
    ]"
    :style="[
      { width: width },
      { height: height },
      { padding: padding },
      { 'border-radius': borderRadius },
      { 'background-color': isHover ? hoverBgColorCPT : bgColorCPT },
      {
        color: isHover ? hoverTextColorCPT : textColorCTP,
      },
    ]"
  >
    <RxzIcon v-if="isLoading" class="rxz-button-loading" name="loading" :size="18" spinner :step="45"></RxzIcon>
    <span>
      <slot>RxzButton</slot>
    </span>
  </button>
  <a
    v-else
    v-bind="$attrs"
    @mouseover="isHover = true"
    @mouseout="isHover = false"
    class="rxz-link"
    :disabled="disabled"
    :class="[
      type ? 'rxz-link-' + type : '',
      { 'rxz-link-is-disabled': disabled},
    ]"
    :style="[
      {
        color: isHover ? hoverTextColorCPT : textColorCTP,
        textDecoration: isHover && underline && !disabled ? 'underline' : 'none',
      },
    ]"
    >
    <slot>RxzLink</slot>
  </a>
</template>

<script setup lang="ts">
import { RxzIcon } from '@/components/base/RxzIcon';
import { defineProps, defineEmits, computed, defineExpose, ref, effect } from 'vue';
import define from './RxzButton.define';
import chroma from 'chroma-js';

const props = defineProps(define.rxzButtonProps);
defineEmits(define.rxzButtonEmits);

const isHover = ref(false);
const isLoading = ref(false);

const bgColorCPT = computed(() => ((props.bgColor && props.bgColor !== 'unset') ? props.bgColor : undefined));
const hoverBgColorCPT = computed(() => {
  // 如果设置了hover颜色，则直接返回
  if (props.hoverBgColor !== 'unset') {
    return props.hoverBgColor;
  }

  // 如果背景色未设置，hover也返回undefined
  if (!chroma.valid(props.bgColor)) {
    return undefined;
  }

  // 根据背景色来设置hover颜色，亮色降低亮度，暗色增加亮度
  const colorObj = chroma(props.bgColor);
  if (colorObj.luminance() >= 0.5) {
    return colorObj.darken(1).hex();
  }
  return colorObj.brighten(1).hex();
});

const textColorCTP = computed(() => ((props.textColor && props.textColor !== 'unset') ? props.textColor : undefined));
const hoverTextColorCPT = computed(() => (props.hoverTextColor === 'unset' ? textColorCTP.value : props.hoverTextColor));

effect(() => {
  isLoading.value = props.loading;
});

defineExpose({
  // 用于外部控制组件loading状态
  isLoading,
});

</script>

<style lang="scss" scoped>
@import "./RxzButton.scss";
</style>
