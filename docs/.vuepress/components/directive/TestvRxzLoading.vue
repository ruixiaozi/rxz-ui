<template>
  <div>
    <div class="content" v-rxz-loading="showLoading">
      我是文本内容
      <rxz-button @click="handleTry">试一下</rxz-button>
    </div>
    <rxz-button @click="refresh" :type="RXZ_BUTTON_TYPE_ENUM.primary">刷新</rxz-button>
  </div>
</template>

<script setup lang="ts">
import { RXZ_BUTTON_TYPE_ENUM } from '@/components';
import { ref } from 'vue';

defineProps<{

}>();
defineEmits<{

}>();
const showLoading = ref(false);
const refresh = () => {
  showLoading.value = true;
  setTimeout(() => {
    showLoading.value = false;
  }, 2000);
}
const handleTry = () => {
  console.log('try');
}
</script>

<style lang="scss" scoped>
.content {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 200px;
  height: 200px;
  margin-bottom: 20px;
}
</style>
