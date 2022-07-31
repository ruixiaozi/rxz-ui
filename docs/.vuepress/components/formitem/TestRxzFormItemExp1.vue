<template>
  <rxz-button @click="add()" style="margin-bottom: 8px">add</rxz-button>
  <rxz-form :form-config="formConfig" v-model="data">
    <rxz-form-item>
      <rxz-label>sub：</rxz-label>
      <rxz-form name="arrayTest" v-slot:default="{formData}">
        <rxz-form-item :name="key" v-for="(item, key) in formData" :key="key">
          <rxz-input></rxz-input>
        </rxz-form-item>
      </rxz-form>
    </rxz-form-item>
  </rxz-form>
</template>
<script>
import { RxzValidators } from '@/definition';
export default {
  data () {
    return {
      formConfig: {
        arrayTest: [
          {
            validators: [RxzValidators.required],
            default: '0',
          },
        ]
      },
      data: {}
    }
  },
  methods: {
    add() {
      this.formConfig.arrayTest.push({
        validators: [RxzValidators.required],
        default: this.formConfig.arrayTest.length,
      },)
    }
  }
}
</script>
