<template>
   <div class="rxz-breadcrumb">
    <template v-for="(item, index) in breadcrumbs" :key="index">
      <a
        :href="item.path"
        :class="{
          link: item.path
        }"
        @click="handleClick($event, item.path)"
      >
        {{ item.text }}
      </a>
      <span v-if="index !== breadcrumbs.length - 1" class="rxz-breadcrumb-split">/</span>
    </template>
  </div>
</template>

<script setup lang="ts">
import { defineProps, defineEmits } from 'vue';
import define from './RxzBreadcrumb.define';
const props = defineProps(define.rxzBreadcrumbProps);
defineEmits(define.rxzBreadcrumbEmits);


const handleClick = (event: Event, path?: string) => {
  if (!props.router || !path) {
    return true;
  }
  // 路由push，并没有改变prop值
  // eslint-disable-next-line vue/no-mutating-props
  props.router.push(path);
  event.preventDefault();
  return false;
};

</script>

<style lang="scss" scoped>
@import "./RxzBreadcrumb.scss";
</style>
