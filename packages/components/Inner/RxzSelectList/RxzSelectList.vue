<template>
  <div class="rxz-select-list" v-bind="$attrs">
    <div
      v-for="option in options" :key="option.key"
      class="rxz-select-list-option"
      :class="{selected: option.value === selected?.value}"
      @click="handleSelect(option)"
    >
      {{ option.label }}
    </div>
  </div>
</template>

<script lang="ts">
import { RxzSelectListCnt } from './RxzSelectList.component';
export default RxzSelectListCnt;
</script>

<style lang="scss" scoped>
@import "./RxzSelectList.scss";
</style>
