<template>
  <span
    class="rxz-select"
    :class="{
      disabled,
      text: !isButton,
    }"
    :style="{
      width,
    }"
    @click="handleClick"
    :tabindex="tabIndex"
    v-bind="$attrs"
    ref="el"
  >
    <span class="rxz-select-text" v-rxz-overflow>
      {{ displayValue?.label || "" }}
    </span>
    <RxzIcon
      :name="isFold ? 'arrow-down' : 'arrow-up'"
      :size="isButton ? 24 : 18"
      class="rxz-select-arrow"
    ></RxzIcon>
  </span>
</template>

<script setup lang="ts">
import { RxzSelectListTpl, RxzSelectOption, RXZ_POPOVER_POS_E } from '@/components/template';
import { useRxzBindingWithinSetup, useRxzFocus, useRxzPopover } from '@/use';
import { defineProps, defineEmits, ref } from 'vue';
import { RxzIcon } from '../RxzIcon';
import { vRxzOverflow } from '@/directives';
import define from './RxzSelect.define';
const props = defineProps(define.rxzSelectProps);
const emits = defineEmits(define.rxzSelectEmits);

const el = ref<HTMLSpanElement>();

const defaultValue: RxzSelectOption = {
  key: '',
  label: '',
  value: '',
};
// 实际显示的值，混入modelValue和closedBindingValue，modelValue优先
const displayValue = useRxzBindingWithinSetup()
  .mixinModelValueClosedBindingValue(props, emits, defaultValue);

const tabIndex = useRxzFocus().tabIndexNext();
const isFold = ref(true);
const popoverKey = ref<string>();

const { openPopover, hiddenPopover } = useRxzPopover();

const openSelectList = () => {
  if (!el.value) {
    return;
  }
  popoverKey.value = openPopover(el.value, RXZ_POPOVER_POS_E.bottomright, {
    key: popoverKey.value,
    showArrow: false,
    radius: true,
    padding: false,
    allowAutoRemove: true,
    content: RxzSelectListTpl,
    contentCntProps: {
      'options': props.options,
      'modelValue': displayValue.value,
      'style': {
        width: props.width,
      },
      'onUpdate:modelValue': (selected: RxzSelectOption) => {
        displayValue.value = selected;
        selected.onClick?.();
        if (popoverKey.value) {
          hiddenPopover(popoverKey.value);
        }
      },
    },
    events: {
      onShowChange: (isShow: boolean) => {
        isFold.value = !isShow;
      },
    },
  });
};

const handleClick = () => {
  if (props.disabled) {
    return;
  }
  isFold.value = !isFold.value;
  if (!isFold.value) {
    openSelectList();
  } else if (popoverKey.value) {
    hiddenPopover(popoverKey.value);
  }
};

</script>

<style lang="scss" scoped>
@import "./RxzSelect.scss";
</style>
