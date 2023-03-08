<template>
  <div class="rxz-table-cell-render">
    <span v-if="config.type === RXZ_TABLE_CELL_RENDER_TYPE_E.DATAMAP">
      {{ getDataMapLabel(config.config, rowData?.[columnKey]) }}
    </span>
    <span v-else-if="config.type === RXZ_TABLE_CELL_RENDER_TYPE_E.I18N">
      {{ $i18n(rowData?.[columnKey]) }}
    </span>
    <span v-else-if="config.type === RXZ_TABLE_CELL_RENDER_TYPE_E.LINK">
      <a :href="config.config.url || rowData?.[config.config.urlKey || '']" :target="config.config.isBlank ? '_blank' : undefined">
        {{ config.config.text || rowData?.[columnKey] }}
      </a>
    </span>
    <span v-else-if="config.type === RXZ_TABLE_CELL_RENDER_TYPE_E.COMPONENT">
      <component :is="config.config.cnt" :value="rowData?.[columnKey]"></component>
    </span>
  </div>
</template>

<script setup lang="ts">
import { useRxzDataMap } from '@/use';
import { defineProps, defineEmits } from 'vue';
import define, { RXZ_TABLE_CELL_RENDER_TYPE_E } from './RxzTableCellRender.define';
defineProps(define.rxzTableCellRenderProps);
defineEmits(define.rxzTableCellRenderEmits);

const { getDataMapLabel } = useRxzDataMap();

</script>

<style lang="scss" scoped>
@import "./RxzTableCellRender.scss";
</style>
