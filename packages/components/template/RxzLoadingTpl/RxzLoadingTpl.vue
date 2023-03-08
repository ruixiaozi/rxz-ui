<template>
  <div class="rxz-loading" :style="[{
    zIndex: zIndex || 'auto',
    position: isGlobal ? 'fixed' : 'absolute'
  }]">
    <div
      class="rxz-loading-container"
      :style="{
        'background-color': bgColor,
        color: color,
      }"
    >
      <slot>
        <div class="default">
          <div class="loader"></div>
          <p v-if="text" class="rxz-loading-container-text">{{ text }}</p>
        </div>
      </slot>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps, defineEmits } from 'vue';
import define from './RxzLoadingTpl.define';
defineProps(define.rxzLoadingTplProps);
defineEmits(define.rxzLoadingTplEmits);

</script>

<style lang="scss" scoped>
@import "./RxzLoadingTpl.scss";
</style>
