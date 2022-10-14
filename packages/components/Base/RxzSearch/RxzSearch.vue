<template>
  <rxz-input
    class="rxz-search"
    v-model="searchValue"
    @keydown="handleEnter"
    clear
  >
    <template v-slot:infront>
      <rxz-icon name="search" class="rxz-search-icon"></rxz-icon>
    </template>
  </rxz-input>
</template>

<script lang="ts">
import { RxzSearchCnt } from './RxzSearch.component';
export default RxzSearchCnt;
</script>

<style lang="scss" scoped>
@import "./RxzSearch.scss";
</style>
