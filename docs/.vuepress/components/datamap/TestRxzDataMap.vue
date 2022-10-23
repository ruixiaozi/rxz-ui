<template>
  <div>
    <rxz-form :form-config="formConfig" v-model="data">
      <rxz-form-item name="key">
        <rxz-label>key：</rxz-label>
        <rxz-input></rxz-input>
      </rxz-form-item>
      <rxz-form-item name="value">
        <rxz-label>value：</rxz-label>
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
<script>
import { RxzValidators } from '@/definition';

export default {
  data() {
    return {
      formConfig: {
        key: {
          validators: [RxzValidators.required],
          default: '',
        },
        value: {
          validators: [],
          default: '',
        },
      },
      data: {},
      result: ''
    }
  },
  methods: {
    handleGetLabel() {
      this.result = this.$RxzDataMap.getLabel(this.data.key, this.data.value);
    },
    handleToArray() {
      this.result = this.$RxzDataMap.toArray(this.data.key);
    },
    handleToValueArray() {
      this.result = this.$RxzDataMap.toValueArray(this.data.key);
    }
  }
};
</script>
