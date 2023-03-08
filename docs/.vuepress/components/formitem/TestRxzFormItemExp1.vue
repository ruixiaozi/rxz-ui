<template>
  <rxz-button @click="add()" style="margin-bottom: 8px">add</rxz-button>
  <rxz-form :form-config="formConfig" v-model="data">
    <rxz-form-item>
      <rxz-label>sub</rxz-label>
      <rxz-form name="arrayTest" v-slot:default="{formData}">
        <rxz-form-item :name="key" v-for="(item, key) in formData" :key="key">
          <rxz-input></rxz-input>
        </rxz-form-item>
      </rxz-form>
    </rxz-form-item>
  </rxz-form>
  <p>表单值：{{ data }}</p>
</template>

<script setup lang="ts">
import { RxzFormItemConfig } from '@/components';
import { RxzFormConfig } from '@/components/form/RxzForm';
import { useRxzValidator } from '@/use';
import { reactive, ref } from 'vue';

defineProps<{

}>();
defineEmits<{

}>();
const formConfig: RxzFormConfig = reactive({
  arrayTest: [
    {
      validators: [useRxzValidator().required],
      default: '',
    }
  ],
});
const data = ref();
const add = () => {
  (formConfig.arrayTest as RxzFormItemConfig[]).push({
    validators: [useRxzValidator().required],
    default: (formConfig.arrayTest as RxzFormItemConfig[]).length,
  })
}
</script>

<style lang="scss" scoped>

</style>
