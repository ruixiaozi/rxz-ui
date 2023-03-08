<template>
  <div
    class="rxz-switch"
    :class="{
      on: displayValue,
      disabled,
      // todo: 待处理
      // 'rxz-switch-form': formValue.isFormValue
    }"
    @click="handleChange"
  >
    {{ displayValue ? onText : offText }}
  </div>
</template>

<script setup lang="ts">
import { useRxzBindingWithinSetup } from '@/use';
import { defineProps, defineEmits } from 'vue';
import define from './RxzSwitch.define';
const props = defineProps(define.rxzSwitchProps);
const emits = defineEmits(define.rxzSwitchEmits);

// 实际显示的值，混入modelValue和closedBindingValue，modelValue优先
const displayValue = useRxzBindingWithinSetup()
  .mixinModelValueClosedBindingValue(props, emits, false);

const handleChange = () => {
  if (props.disabled) {
    return;
  }
  displayValue.value = !displayValue.value;
};

</script>

<style lang="scss" scoped>
@import "./RxzSwitch.scss";
</style>
