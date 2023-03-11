<template>
  <div class="container">
    <RxzTree v-model="data" @selected="(key) => selected = key"></RxzTree>
  </div>
  <p>菜单数据：</p>
  <p>{{ data }}</p>
  <p>{{ selected }}</p>
</template>

<script setup lang="ts">import { RxzTreeItem } from '@/components/navigation/RxzTree';
import { reactive, ref } from 'vue';

defineProps<{

}>();
defineEmits<{

}>();
const data = reactive<RxzTreeItem[]>([
  {
    key: '1',
    label: 'tree1',
    isFold: true,
    children: [
      {
        key: '1-1',
        label: 'tree1-1',
        isFold: true,
        children: [
          {
            key: '1-1-1',
            label: 'tree1-1-1',
            isFold: true,
            fetchChildren: () => {
              return new Promise<RxzTreeItem[]>((resolve) => {
                setTimeout(() => {
                  resolve([
                    {
                      key: '1-1-1-1',
                      label: 'tree1-1-1-111111111111111111111111111111111111111111111111111111111111111111111111111111111111111',
                    },
                    {
                      key: '1-1-1-2',
                      label: 'tree1-1-1-2',
                    },
                  ])
                }, 1000);
              })
            }
          },
          {
            key: '1-1-2',
            label: 'tree1-1-2',
          },
        ]
      },
      {
        key: '1-2',
        label: 'tree1-2',
        disabled: true,
      },
      {
        key: '1-3',
        label: 'tree1-3',
      },
    ]
  },
  {
    key: '2',
    label: 'tree2',
  },
])
const selected = ref<string>('');
</script>

<style lang="scss" scoped>
.container {
  width: 100%;
  overflow: auto;
}
</style>
