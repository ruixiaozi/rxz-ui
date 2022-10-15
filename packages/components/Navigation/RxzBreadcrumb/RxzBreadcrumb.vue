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

<script lang="ts">
import { RxzBreadcrumbCnt } from './RxzBreadcrumb.component';
export default RxzBreadcrumbCnt;
</script>

<style lang="scss" scoped>
@import "./RxzBreadcrumb.scss";
</style>
