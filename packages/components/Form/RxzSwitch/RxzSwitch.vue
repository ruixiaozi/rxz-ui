<template>
  <div
    class="rxz-switch"
    :class="{
      on: formValue.value,
      disabled,
      'rxz-switch-form': formValue.isFormValue
    }"
    @click="handleChange"
  >
    {{ formValue.value ? onText : offText }}
  </div>
</template>

<script lang="ts">
import { RxzSwitchCnt } from './RxzSwitch.component';
export default RxzSwitchCnt;
</script>

<style lang="scss" scoped>
@import "./RxzSwitch.scss";
</style>
