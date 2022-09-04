<template>
  <rxz-flex
    :direction="direction"
    class="rxz-checkbox"
    :class="{
      'rxz-checkbox-form': formValue.isFormValue,
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
      <rxz-icon
        :name="isSelect(item) ? 'checkbox-fill' : 'checkbox-empty'"
      ></rxz-icon>
      <span class="rxz-checkbox-item-label">{{ item.label }}</span>
    </div>

  </rxz-flex>
</template>

<script lang="ts">
import { RxzCheckboxCnt } from './RxzCheckbox.component';
export default RxzCheckboxCnt;
</script>

<style lang="scss" scoped>
@import "./RxzCheckbox.scss";
</style>
