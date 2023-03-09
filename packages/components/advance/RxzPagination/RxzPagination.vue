<template>
 <div class="rxz-pagination">
    <div class="rxz-pagination-left">
      <span class="rxz-pagination-total">{{ $i18n('rxz_pagination_total', [modelValue.total]) }}</span>
      <RxzIcon @click="back" :class="{ 'disabled': pageStart === modelValue.page }" name="arrow-left" ></RxzIcon>
      <template v-for="page in pages" :key="page" >
        <RxzButton
          class="rxz-pagination-page"
          @click="go(page)"
          :type="page === modelValue.page ? RXZ_BUTTON_TYPE_ENUM.primary : RXZ_BUTTON_TYPE_ENUM.default"
          >
          {{ typeof page === 'number' ?  (page + diffStart) : '...' }}
        </RxzButton>
      </template>
      <RxzIcon @click="forward" :class="{ 'disabled': pageEnd === modelValue.page }" name="arrow-right" ></RxzIcon>
    </div>
    <div class="rxz-pagination-right">
      <RxzInput v-model="gotoNum" width="50px"></RxzInput>
      <RxzButton @click="go(Number(gotoNum) - diffStart)" :type="RXZ_BUTTON_TYPE_ENUM.primary" class="rxz-pagination-goto">前往</RxzButton>
    </div>
  </div>
</template>

<script setup lang="ts">
import { RXZ_BUTTON_TYPE_ENUM, RxzIcon, RxzButton, RxzInput } from '@/components/base';
import { isString } from 'lodash';
import { defineProps, defineEmits, ref, computed, watch, effect } from 'vue';
import define, { RXZ_PAGINATION_PAGE_E } from './RxzPagination.define';
const props = defineProps(define.rxzPaginationProps);
const emits = defineEmits(define.rxzPaginationEmits);

const gotoNum = ref('0');

const pageEnd = computed(() => {
  if (props.modelValue.pageSize <= 0) {
    return 0;
  }
  return Math.ceil(props.modelValue.total / props.modelValue.pageSize) - 1 + props.pageStart;
});

const diffStart = computed(() => props.displayStart - props.pageStart);

const pages = computed((): (RXZ_PAGINATION_PAGE_E | number)[] => {
  if (props.pageStart > pageEnd.value) {
    return [];
  }

  const _pages: (RXZ_PAGINATION_PAGE_E | number)[] = [props.pageStart];
  if (props.pageStart === pageEnd.value) {
    return _pages;
  }

  let start = props.modelValue.page - 2;
  if (start - 1 <= props.pageStart) {
    start = props.pageStart + 1;
  } else {
    _pages.push(RXZ_PAGINATION_PAGE_E.FAST_BACK);
  }

  let end = props.modelValue.page + 2;
  const endArr: any[] = [pageEnd.value];
  if (end + 1 >= pageEnd.value) {
    end = pageEnd.value - 1;
  } else {
    endArr.unshift(RXZ_PAGINATION_PAGE_E.FAST_FORWARD);
  }

  for (let i = start; i <= end; i++) {
    _pages.push(i);
  }
  _pages.push(...endArr);
  return _pages;
});

const onPageChange = () => {
  gotoNum.value = String(props.modelValue.page + diffStart.value);
};

watch(() => props.modelValue.page, onPageChange, { immediate: true });

const changePage = (page: number) => {
  const newValue = {
    ...props.modelValue,
    page,
  };
  emits('change', newValue);
  emits('update:modelValue', newValue);
};

effect(() => {
  if (props.modelValue.page > pageEnd.value) {
    changePage(pageEnd.value);
  } else if (props.modelValue.page < props.pageStart) {
    changePage(props.pageStart);
  }
}, { lazy: true });

const back = () => {
  if (props.modelValue.page <= props.pageStart) {
    return;
  }
  changePage(props.modelValue.page - 1);
};

const forward = () => {
  if (props.modelValue.page >= pageEnd.value) {
    return;
  }
  changePage(props.modelValue.page + 1);
};

const go = (page: number | RXZ_PAGINATION_PAGE_E) => {
  // 快进、快退
  if (isString(page) && Object.values(RXZ_PAGINATION_PAGE_E).includes(page)) {
    changePage(props.modelValue.page + ((page === RXZ_PAGINATION_PAGE_E.FAST_BACK ? -1 : 1) * 3));
    return;
  }

  let realPage = Number(page);

  // 非数字不跳转，并恢复到当前页
  if (Number.isNaN(realPage)) {
    onPageChange();
    return;
  }

  // 跳转不能越界
  if (realPage > pageEnd.value) {
    realPage = pageEnd.value;
  } else if (realPage < props.pageStart) {
    realPage = props.pageStart;
  }
  changePage(realPage);
  onPageChange();
};

</script>

<style lang="scss" scoped>
@import "./RxzPagination.scss";
</style>
