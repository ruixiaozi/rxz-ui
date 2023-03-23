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
    <span v-else-if="config.type === RXZ_TABLE_CELL_RENDER_TYPE_E.OPERATOR">
      <RxzButtonGroup :buttons="config.config.buttons" :max="config.config.max" :link="true" :data="rowData"></RxzButtonGroup>
    </span>
    <span v-else-if="config.type === RXZ_TABLE_CELL_RENDER_TYPE_E.FORM_ITEM">
      <RxzFormItem :name="columnKey" :errorTip="config.config.errorTip || {}">
        <RxzLabel></RxzLabel>
        <component v-if="config.config.slotCnt" :is="config.config.slotCnt" :index="index" v-bind="config.config.props || {}"></component>
        <span v-else>{{ getClosedBindingValue()?.value }}</span>
      </RxzFormItem>
    </span>
    <span v-else-if="config.type === RXZ_TABLE_CELL_RENDER_TYPE_E.COMPONENT">
      <component
        :is="config.config.cnt"
        :value="rowData?.[columnKey]"
        :rowData="rowData"
        :index="index"
        :columnKey="columnKey"
        v-bind="config.config.props || {}"
      ></component>
    </span>
  </div>
</template>

<script setup lang="ts">
import { RxzButtonGroup } from '@/components/advance/RxzButtonGroup';
import { RxzFormItem, RxzLabel } from '@/components/form';
import { useRxzBindingWithinSetup, useRxzDataMap } from '@/use';
import { defineProps, defineEmits, inject, Ref, computed, provide } from 'vue';
import define, { RXZ_TABLE_CELL_RENDER_TYPE_E } from './RxzTableCellRender.define';
const props = defineProps(define.rxzTableCellRenderProps);
defineEmits(define.rxzTableCellRenderEmits);
const { getDataMapLabel } = useRxzDataMap();

const { getClosedBindingValue } = useRxzBindingWithinSetup();

// 需要先注入行输入
if (props.config.type === RXZ_TABLE_CELL_RENDER_TYPE_E.FORM_ITEM) {
  // 注入父亲表单的data
  const parentFormData = inject<Ref<any>>('formData');
  // 注入父亲表单的config
  const parentFormConfig = inject<Ref<any>>('formConfig');
  // 实际的表单值
  let formData = computed({
    get() {
      return parentFormData?.value?.[props.index];
    },
    set(newV) {
      if (parentFormData?.value && Array.isArray(parentFormData?.value)) {
        parentFormData.value[props.index] = newV;
        parentFormData.value = [...parentFormData.value];
      }
    },
  });

  let formConfig = computed(() => parentFormConfig?.value?.[props.index]);

  provide('formData', formData);
  provide('formConfig', formConfig);
}

</script>

<style lang="scss" scoped>
@import "./RxzTableCellRender.scss";
</style>
