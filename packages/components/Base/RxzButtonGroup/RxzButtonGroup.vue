<template>
  <div class="rxz-button-group">
    <rxz-button
      v-for="(botton, index) in displayButtons"
      :key="index"
      v-bind="botton"
      :link="link"
    >
      {{ botton.text }}
    </rxz-button>
    <rxz-select
      v-if="hasMore"
      :modelValue="{ label: $i18n('button_more') }"
      :isButton="!link"
      width="fit-content"
      :options="moreOptions"
    ></rxz-select>
  </div>
</template>
<script lang="ts">
import { RxzButtonGroupCnt } from './RxzButtonGroup.component';
export default RxzButtonGroupCnt;
</script>

<style lang="scss" scoped>
@import "./RxzButtonGroup.scss";
</style>
