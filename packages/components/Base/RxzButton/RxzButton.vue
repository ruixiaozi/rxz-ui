<template>
  <button
    class="rxz-button"
    @click="handleClick"
    @mouseover="isHover = true"
    @mouseout="isHover = false"
    :type="nativeType"
    :disabled="disabled || loading"
    :class="[
      type ? 'rxz-button-' + type : '',
      { 'rxz-button-is-disabled': disabled || loading },
      ...cls,
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
      css,
    ]"
  >
    <RxzIcon v-if="loading" name="spinner" spinner></RxzIcon>

    <span>
      <slot>RxzButton</slot>
    </span>
  </button>
</template>

<script lang="ts">
import { RxzButtonCnt } from './RxzButton.component';
export default RxzButtonCnt;
</script>

<style lang="scss" scoped>
@import "./RxzButton.scss";
</style>
