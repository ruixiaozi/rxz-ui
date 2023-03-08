<template>
  <div>
    <span class="dispaly-item" v-for="(item, inx) in icons" :key="inx">
      <rxz-icon :size="24" :name="item"></rxz-icon>
      <p>{{ item }}</p>
    </span>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
const icons = ref([] as string[]);
onMounted(() => {
  import('./rxz-icon.json').then((res) => {
      if (res?.default) {
        icons.value = res.default;
      }
    })
});
</script>

<style scoped>
.dispaly-item {
  display: inline-flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 200px;
  height: 100px;

}
</style>
