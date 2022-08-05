<template>
  <div
    class="rxz-input"
    :style="{
      'width': width,
    }"
    :class="{
      'rxz-form-value': formValue.isFormValue,
      'is-disabled': disabled,
    }"
  >
    <input
      :style="{
        'padding-left': `${paddingLeft}px`,
        'padding-right': `${paddingRight}px`,
      }"
      :type="password && !openEye ? 'password' : 'text'"
      v-bind="$attrs"
      @blur="handleBlur"
      v-model="formValue.value"
      :disabled="disabled"
      ref="input"
      @keydown="updateCapslock"
      @paste="handlePaste"
      @copy="handleCopy"
    />
    <div class="rxz-input-in-front rxz-input-vmid" ref="infront">
      <slot name="infront"></slot>
    </div>
    <div class="rxz-input-in-rear rxz-input-vmid" ref="inrear">
      <rxz-icon v-if="showCapslock" name="font" class="rxz-input-capslock"></rxz-icon>
      <rxz-icon v-if="showClear" name="times-circle" class="rxz-input-clear" @click="clearText()"></rxz-icon>
      <rxz-icon v-if="password" :name="openEye ? 'eye' : 'eye-slash'" class="rxz-input-eye" @click="changeEye()"></rxz-icon>
      <slot name="inrear"></slot>
    </div>
  </div>
</template>

<script lang="ts">
import { RxzInputCnt } from './RxzInput.component';
export default RxzInputCnt;
</script>

<style lang="scss" scoped>
@import "./RxzInput.scss";
</style>
