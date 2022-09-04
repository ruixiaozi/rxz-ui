<template>
  <rxz-flex
    :direction="direction"
    class="rxz-radio"
    :class="{
      'rxz-radio-form': formValue.isFormValue,
    }"
  >
    <div v-for="(item, index) in items" :key="index"
      class="rxz-radio-item"
      :class="{
        'selected': formValue.value?.value === item.value,
        disabled
      }"
      @click="handleSelect(item)"
    >
      <rxz-icon
        :name="formValue.value?.value === item.value ? 'radio-fill' : 'radio-empty'"
      ></rxz-icon>
      <span class="rxz-radio-item-label">{{ item.label }}</span>
    </div>

  </rxz-flex>
</template>

<script lang="ts">
import { RxzRadioCnt } from './RxzRadio.component';
export default RxzRadioCnt;
</script>

<style lang="scss" scoped>
@import "./RxzRadio.scss";
</style>
