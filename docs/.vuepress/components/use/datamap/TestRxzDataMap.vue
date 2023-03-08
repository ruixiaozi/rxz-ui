<template>
  <div>
    <rxz-form :form-config="formConfig" v-model="data">
      <rxz-form-item name="key">
        <rxz-label>key</rxz-label>
        <rxz-input></rxz-input>
      </rxz-form-item>
      <rxz-form-item name="value">
        <rxz-label>value</rxz-label>
        <rxz-input></rxz-input>
      </rxz-form-item>
    </rxz-form>
    <rxz-button @click="handleGetLabel">getLabel</rxz-button>
    <rxz-button @click="handleToArray">toArray</rxz-button>
    <rxz-button @click="handleToValueArray">toValueArray</rxz-button>
    <div>
      {{ result }}
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRxzDataMap } from '@/use';
import { ref } from 'vue';

defineProps<{

}>();
defineEmits<{

}>();
const formConfig = {
  key: {
    validators: [],
    default: 'TESK_STATUS',
  },
  value: {
    validators: [],
    default: '0',
  },
};
const data = ref<any>({});
const result = ref<any>();
const { getDataMapLabel, toDataMapArray, toDataMapValueArray } = useRxzDataMap();
const handleGetLabel = () => result.value = getDataMapLabel(data.value.key, data.value.value);
const handleToArray = () => result.value = toDataMapArray(data.value.key);
const handleToValueArray = () => result.value = toDataMapValueArray(data.value.key);

</script>

<style lang="scss" scoped>

</style>
