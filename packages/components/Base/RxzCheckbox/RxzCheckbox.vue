<template>
  <RxzFlex
    :direction="direction"
    class="rxz-checkbox"
    :class="{
      // todo：待处理
      /* 'rxz-checkbox-form': formValue.isFormValue, */
    }"
  >
    <div v-for="(item, index) in items" :key="index"
      class="rxz-checkbox-item"
      :class="{
        'selected': isSelect(item),
        disabled
      }"
      @click="handleSelect(item)"
    >
      <RxzIcon
        :name="isSelect(item) ? 'checkbox-fill' : 'checkbox-empty'"
      ></RxzIcon>
      <span class="rxz-checkbox-item-label">{{ item.label }}</span>
    </div>

  </RxzFlex>
</template>

<script setup lang="ts">
import { RxzFlex } from '@/components/layout';
import { RxzIcon } from '../RxzIcon';
import { defineProps, defineEmits } from 'vue';
import define, { RxzCheckboxItem } from './RxzCheckbox.define';
import { useRxzBindingWithinSetup } from '@/use';
const props = defineProps(define.rxzCheckboxProps);
const emits = defineEmits(define.rxzCheckboxEmits);

const defaultValue: RxzCheckboxItem[] = [];
// 实际显示的值，混入modelValue和closedBindingValue，modelValue优先
const displayValue = useRxzBindingWithinSetup()
  .mixinModelValueClosedBindingValue(props, emits, defaultValue);

const isSelect = (item: RxzCheckboxItem) => displayValue.value.some((selectValue) => selectValue.value === item.value);

const handleSelect = (item: RxzCheckboxItem) => {
  if (props.disabled) {
    return;
  }
  const index = displayValue.value.findIndex((selectValue: RxzCheckboxItem) => selectValue.value === item.value);
  if (index >= 0) {
    displayValue.value.splice(index, 1);
    return;
  }
  displayValue.value.push(item);
};

</script>

<style lang="scss" scoped>
@import "./RxzCheckbox.scss";
</style>
