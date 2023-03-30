<template>
  <RxzForm :form-config="formConfigs" v-model="data">
    <RxzForm name="configs" style="width: 100%">
      <RxzTable ref="table" :table-config="tableConfig"></RxzTable>
    </RxzForm>
  </RxzForm>
</template>

<script setup lang="ts">
import { RxzForm, RxzFormConfig } from '@/components/form';
import { RxzTable, RxzTableConfig, RXZ_TABLE_CELL_RENDER_TYPE_E } from '@/components/table';
import { defineProps, defineEmits, computed, watch, ref } from 'vue';
import define from './RxzTableForm.define';

const props = defineProps(define.rxzTableFormProps);
const emits = defineEmits(define.rxzTableFormEmits);

const formConfigs = computed<RxzFormConfig>(() => ({
  configs: props.modelValue.map(() => ({
    ...props.rowConfig,
  })),
}));

const data = computed<any>({
  get() {
    return {
      configs: props.modelValue,
    };
  },
  set(newV) {
    emits('update:modelValue', newV.configs);
  },
});

const table = ref<InstanceType<typeof RxzTable>>();

watch(() => props.modelValue, () => {
  table?.value?.refresh();
}, { deep: true });


const tableConfig = computed<RxzTableConfig>(() => ({
  columns: Object.entries(props.rowConfig).map(([key, value]) => ({
    key,
    label: value.label,
    cellRender: {
      type: RXZ_TABLE_CELL_RENDER_TYPE_E.FORM_ITEM,
      config: {
        slotCnt: value.slotCnt,
        props: value.props,
        errorTip: value.errorTip,
      },
    },
  })),
  getData: ({ paginations }) => {
    const start = (paginations?.page || 0) * (paginations?.pageSize || 10);
    const end = start + (paginations?.pageSize || 10);
    return {
      total: data.value.configs.length,
      datas: data.value.configs.slice(start, end).map(() => ({})),
    };
  },
  paginations: {
    pageSize: props.pageSize,
  },
}));

</script>

<style lang="scss" scoped>
@import "./RxzTableForm.scss";
</style>
