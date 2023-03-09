<template>
  <div
    class="rxz-input"
    :style="{
      'width': width,
    }"
    :class="{
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
      v-model="displayValue"
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
      <RxzIcon v-if="showCapslock" name="capslock" class="rxz-input-capslock"></RxzIcon>
      <RxzIcon v-if="showClear" name="clear" class="rxz-input-clear" @click="clearText()"></RxzIcon>
      <RxzIcon v-if="password" :name="openEye ? 'eye' : 'eye-close'" class="rxz-input-eye" @click="changeEye()"></RxzIcon>
      <slot name="inrear"></slot>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRxzBindingWithinSetup } from '@/use';
import { RxzIcon } from '@/components/base/RxzIcon';
import { isNil } from 'lodash';
import { defineProps, defineEmits, ref, computed, onMounted, onUpdated } from 'vue';
import define from './RxzInput.define';
const props = defineProps(define.rxzInputProps);
const emits = defineEmits(define.rxzInputEmits);

// 实际显示的值，混入modelValue和closedBindingValue，modelValue优先
const displayValue = useRxzBindingWithinSetup()
  .mixinModelValueClosedBindingValue(props, emits, '');

const paddingLeft = ref(10);
const paddingRight = ref(10);
const isCapslock = ref(false);
const openEye = ref(false);

const showClear = computed(() => props.clear && !(isNil(displayValue.value) || displayValue.value === ''));
const showCapslock = computed(() => props.capslock && isCapslock.value);

const input = ref<HTMLInputElement>();
const infront = ref<HTMLDivElement>();
const inrear = ref<HTMLDivElement>();


const updatePadding = () => {
  paddingLeft.value = (infront.value?.offsetWidth || 0) + 10;
  paddingRight.value = (inrear.value?.offsetWidth || 0) + 10;
};

const updateCapslock = (event: KeyboardEvent) => {
  isCapslock.value = event.getModifierState('CapsLock');
};

const clearText = () => {
  if (props.disabled) {
    return;
  }
  displayValue.value = '';
  input.value?.focus();
};

const changeEye = () => {
  if (props.disabled) {
    return;
  }
  openEye.value = !openEye.value;
};

const handleCopy = (event: ClipboardEvent) => {
  // 禁止复制或者密码框阻止复制
  if (!props.copy || props.password) {
    event.preventDefault();
    return;
  }
  emits('copy', event);
};

const handlePaste = (event: ClipboardEvent) => {
  if (!props.paste) {
    event.preventDefault();
    return;
  }
  emits('paste', event);
};

const handleBlur = (event: any) => {
  emits('blur', event);
};

onMounted(() => {
  setTimeout(() => {
    updatePadding();
  }, 100);
});

onUpdated(() => {
  updatePadding();
});

</script>

<style lang="scss" scoped>
@import "./RxzInput.scss";
</style>
