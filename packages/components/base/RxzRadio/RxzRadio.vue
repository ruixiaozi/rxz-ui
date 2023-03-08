<template>
  <RxzFlex
    :direction="direction"
    class="rxz-radio"
    :class="{
      // todo：待处理
      /* 'rxz-radio-form': formValue.isFormValue, */
    }"
  >
    <div v-for="(item, index) in items" :key="index"
      class="rxz-radio-item"
      :class="{
        'selected': displayValue?.value === item.value,
        disabled
      }"
      @click="handleSelect(item)"
    >
      <RxzIcon
        :name="displayValue?.value === item.value ? 'radio-fill' : 'radio-empty'"
      ></RxzIcon>
      <span class="rxz-radio-item-label">{{ item.label }}</span>
    </div>
  </RxzFlex>
</template>

<script setup lang="ts">
import { RxzFlex } from '@/components/layout';
import { RxzIcon } from '@/components/base/RxzIcon';
import { useRxzBindingWithinSetup } from '@/use';
import { defineProps, defineEmits } from 'vue';
import define, { RxzRadioItem } from './RxzRadio.define';
const props = defineProps(define.rxzRadioProps);
const emits = defineEmits(define.rxzRadioEmits);

const defaultValue: RxzRadioItem = {
  label: '',
  value: '',
};
// 实际显示的值，混入modelValue和closedBindingValue，modelValue优先
const displayValue = useRxzBindingWithinSetup()
  .mixinModelValueClosedBindingValue(props, emits, defaultValue);

const handleSelect = (item: RxzRadioItem) => {
  if (props.disabled) {
    return;
  }
  displayValue.value = item;
};

</script>

<style lang="scss" scoped>
@import "./RxzRadio.scss";
</style>
