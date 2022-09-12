<template>
  <transition :name="`move-anim`" appear>
    <div v-if="display" class="rxz-tip" :class="[`rxz-tip-${type}`]" v-bind="$attrs">
      <rxz-icon :name="type" :size="16"></rxz-icon>
      <span class="rxz-tip-content">
        <slot>{{ type }}</slot>
      </span>
      <rxz-icon v-if="closable" @click="hidden" class="rxz-tip-close" name="close" :size="12"></rxz-icon>
    </div>
  </transition>
</template>

<script lang="ts">
import { RxzTipCnt } from './RxzTip.component';
export default RxzTipCnt;
</script>

<style lang="scss" scoped>
@import "./RxzTip.scss";
</style>
