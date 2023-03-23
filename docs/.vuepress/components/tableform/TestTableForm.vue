<template>
  <div>
    <RxzTableForm :row-config="rowConfig" v-model="data"></RxzTableForm>
  </div>
  <div><RxzButton @click="addRowFront">在前端添加一行</RxzButton></div>
  <div><RxzButton @click="addRowRear">在尾部添加一行</RxzButton></div>
  <p>绑定数据：</p>
  <p>{{ data }}</p>
</template>

<script setup lang="ts">
import { RxzInput, RxzTableFormRowConfig, RxzTextarea } from '@/components';
import { useRxzValidator } from '@/use';
import { ref } from 'vue';

defineProps<{

}>();
defineEmits<{

}>();

const rowConfig: RxzTableFormRowConfig = {
  test: {
    label: '测试',
    validators: [],
    slotCnt: RxzInput,
    errorTip: {},
  },
  test2: {
    label: '测试2',
    validators: [useRxzValidator().required],
    slotCnt: RxzTextarea,
    errorTip: {},
  }
}

const data = ref<any>([
  {
    test: '1',
    test2: '1',
  },
]);

let index = 2;
const addRowFront = () => {
  data.value.unshift({})
}
const addRowRear = () => {
  data.value.push({
    test: index,
    test2: index,
  })
}

</script>

<style lang="scss" scoped>

</style>
