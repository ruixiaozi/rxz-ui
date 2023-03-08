<template>
  <RxzInput
    class="rxz-search"
    v-model="searchValue"
    @keydown="handleEnter"
    clear
  >
    <template v-slot:infront>
      <rxz-icon name="search" class="rxz-search-icon"></rxz-icon>
    </template>
  </RxzInput>
</template>

<script setup lang="ts">
import { RxzInput } from '@/components/base';
import { debounce } from 'lodash';
import { defineEmits, defineExpose, ref } from 'vue';
import define from './RxzSearch.define';
const emits = defineEmits(define.rxzSearchEmits);

const searchValue = ref('');

const search = () => {
  emits('search', searchValue.value);
};

const handleEnter = debounce((event: KeyboardEvent) => {
  if (event.key === 'Enter') {
    search();
  }
}, 100);

defineExpose({
  search,
});

</script>

<style lang="scss" scoped>
@import "./RxzSearch.scss";
</style>
