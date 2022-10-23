<template>
  <div class="rxz-tabs">
    <div class="rxz-tabs-tab">
      <span
        v-for="(item, index) in tabs"
        :key="index"
        :class="{
          select: item.key === value?.key,
        }"
        @click="handleClick(item)"
      >
        {{ item.name }}
      </span>
    </div>
    <div class="rxz-tabs-body">
      <slot></slot>
    </div>
  </div>
</template>

<script lang="ts">
import { RxzTabsCnt } from './RxzTabs.component';
export default RxzTabsCnt;
</script>

<style lang="scss" scoped>
@import "./RxzTabs.scss";
</style>
