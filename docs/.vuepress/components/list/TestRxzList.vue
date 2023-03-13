<template>
  <RxzList class="list" v-slot="{item}" :items="items">
    <div class="item">
      {{ item }}
    </div>
  </RxzList>
  <rxz-button @click="handleChange">改变数据</rxz-button>
</template>

<script setup lang="ts">import { ref } from 'vue';

defineProps<{

}>();
defineEmits<{

}>();
let items = ref<any[]>([]);
const handleChange = () => {
  const len = (Math.random() * 20000) + 20000;
  const newItems = [];
  for (let i = 1; i <= len; i++) {
    newItems.push({id: i, value: i + '字符内容'.repeat(Math.random() * 20) })
  }
  items.value = newItems;
}
handleChange();
</script>

<style lang="scss" scoped>
.list {
  height: 200px;
}
.item {
  height: 30px;
  width: 100%;
  border: 1px solid #000;
}
</style>
