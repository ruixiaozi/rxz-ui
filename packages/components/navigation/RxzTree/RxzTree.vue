<template>
  <div class="rxz-tree">
    <div v-for="(item) in config.items" :key="item.key" class="rxz-tree-item">
      <div
        class="rxz-tree-item-label"
        :class="{
          disabled: item.disabled || item.loading,
          selected: selectedKey.value === item.key,
        }"
        @click="trigger(item)"
        >
        <RxzIcon
          :name="item.isFold ? (item.foldIcon || foldIcon) : (item.unfoldIcon || unfoldIcon)"
          :size="14"
          :style="{
            color: item.iconColor || iconColor,
            // children和fetch方法都不存在不显示
            opacity: (hiddenIcon || (!item.children && !item.fetchChildren)) ? 0 : 1,
          }">
        </RxzIcon>
        <span class="rxz-tree-item-label-content">{{ item.label }}</span>
        <RxzIcon v-if="item.loading" name="loading" :size="14" spinner></RxzIcon>
      </div>
      <div class="rxz-tree-item-subtree"
        :style="{
          marginLeft: indent
        }"
        v-if="item.children && !item.isFold"
        >
        <RxzTree :ref="(cnt: any) => subTrees[item.key] = cnt" v-model="item.children"></RxzTree>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { RxzIcon } from '@/components/base';
import { isNil } from 'lodash';
import { defineProps, defineEmits, reactive, watch, ref, inject, Ref, computed, provide } from 'vue';
import { RxzTree } from '.';
import define, { RxzTreeItem } from './RxzTree.define';
const props = defineProps(define.rxzTreeProps);
const emits = defineEmits(define.rxzTreeEmits);
const subTrees: { [key: string]: InstanceType<typeof RxzTree> } = {};

const config = reactive({ items: props.modelValue });
watch(() => props.modelValue, (newV, oldV) => {
  if (newV === oldV) {
    return;
  }
  config.items = newV;
}, { deep: true });
watch(() => config.items, (newV, oldV) => {
  if (newV === oldV) {
    return;
  }
  emits('update:modelValue', newV);
}, { deep: true });

const parentSelectedKey = inject<Ref<string>>('selectedKey');

const selectedKey = computed<Ref<string>>(() => parentSelectedKey || ref(''));

provide('selectedKey', selectedKey.value);

const trigger = async(item: RxzTreeItem) => {
  if (item.disabled || item.loading
  ) {
    return;
  }

  selectedKey.value.value = item.key;
  emits('selected', item.key);

  // children和fetch方法都不存在, 或者 没有isFlod属性，表示当前是叶子节点
  if ((!item.children && !item.fetchChildren) || isNil(item.isFold)) {
    return;
  }
  // 如果存在fetch，那么每次展开需要获取
  if (item.fetchChildren && item.isFold) {
    item.loading = true;
    const res = await Promise.resolve(item.fetchChildren()).finally(() => {
      item.loading = false;
    });
    if (Array.isArray(res)) {
      item.children = res;
      item.isFold = !item.isFold;
    }
  } else {
    item.isFold = !item.isFold;
  }
};


</script>

<style lang="scss" scoped>
@import "./RxzTree.scss";
</style>
