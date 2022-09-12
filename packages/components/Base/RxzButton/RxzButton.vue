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

<script lang="ts">
import { RxzButtonCnt } from './RxzButton.component';
export default RxzButtonCnt;
</script>

<style lang="scss" scoped>
@import "./RxzButton.scss";
</style>
