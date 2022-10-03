<template>
  <div class="rxz-pagination">
    <div class="rxz-pagination-left">
      <span class="rxz-pagination-total">{{ $i18n('rxz_pagination_total', [paginations.total]) }}</span>
      <rxz-icon @click="back" :class="{ 'disabled': pageStart === paginations.page }" name="arrow-left" ></rxz-icon>
      <template v-for="page in pages" :key="page" >
        <rxz-button
          class="rxz-pagination-page"
          @click="go(page)"
          :type="page === paginations.page ? 'primary' : 'default'"
          >
          {{ Number.isInteger(page) ?  (page + diffStart) : '...' }}
        </rxz-button>
      </template>,
      <rxz-icon @click="forward" :class="{ 'disabled': pageEnd === paginations.page }" name="arrow-right" ></rxz-icon>
    </div>
    <div class="rxz-pagination-right">
      <rxz-input v-model="gotoNum" width="50px"></rxz-input>
      <rxz-button @click="go(gotoNum - diffStart)" type="primary" class="rxz-pagination-goto">前往</rxz-button>
    </div>
  </div>
</template>

<script lang="ts">
import { RxzPaginationCnt } from './RxzPagination.component';
export default RxzPaginationCnt;
</script>

<style lang="scss" scoped>
@import "./RxzPagination.scss";
</style>
