<template>
  <div class="rxz-list" ref="list" v-rxz-resize-observe="handleResize">
    <div class="rxz-list-empty" :style="{
      height: `${listHeight}px`
    }"></div>
    <div class="rxz-list-wrap" :style="{
      transform: `translateY(${currentOffset}px)`
    }">
      <div v-for="(item, inx) in displayItems"
        :key="inx"
        class="rxz-list-wrap-item"
        ref="itemEls"
        :data-index="item.index"
        :style="{
          height: computeRealItemHeight ? undefined : `${positionBuffer[item.index].height}px`
        }"
        >
        <slot :item="item.data" :index="item.index">{{ item.data }}</slot>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { vRxzResizeObserve } from '@/directives';
import { debounce, throttle } from 'lodash';
import { defineProps, defineEmits, ref, computed, onMounted, onUpdated, nextTick, watch } from 'vue';
import define from './RxzList.define';

const props = defineProps(define.rxzListProps);
defineEmits(define.rxzListEmits);

const list = ref<HTMLDivElement>();
const itemEls = ref<HTMLDivElement[]>([]);

// 用于保存每个元素的位置的缓存
const positionBuffer = ref<any[]>([]);

const start = ref(0);
const visibleCount = ref(0);
const end = ref(0);
// 即每个缓冲区只缓冲 0.5 * 最大可见列表项数 个元素
const bufferPercent = ref(0.3);
const currentOffset = ref(0);
const bufferCount = computed(() => visibleCount.value * bufferPercent.value >> 0);
// 使用索引和缓冲数量的最小值 避免缓冲不存在或者过多的数据
const aboveCount = computed(() => Math.min(start.value, bufferCount.value));
const belowCount = computed(() => Math.min(props.items.length - end.value, bufferCount.value));
const displayItems = computed(() => props.items
  .map((data, index) => ({
    index,
    data,
  }))
  .slice(start.value - aboveCount.value, end.value + belowCount.value));
const listHeight = computed(() => positionBuffer.value.at(-1).bottom);

let binarySearch = function(scrollTop: number) {
  const len = positionBuffer.value.length;
  let left = 0, right = len - 1;
  let tempIndex = null;

  while (left <= right) {
    let midIndex = (left + right) >> 1;
    let midVal = positionBuffer.value[midIndex].bottom;

    if (midVal === scrollTop) {
      return midIndex;
    } else if (midVal < scrollTop) {
      left = midIndex + 1;
    } else {
      // positionBuffer不一定存在与scrollTop相等的项，不断收缩右区间，寻找最匹配的项
      if (tempIndex === null || tempIndex > midIndex) {
        tempIndex = midIndex;
      }
      right--;
    }
  }
  // 如果没有搜索到完全匹配的项 就返回最匹配的项
  return tempIndex;
};

const getStartIndex = (scrollTop = 0) => binarySearch(scrollTop) || 0;

const getCurrentOffset = () => {
  if (start.value >= 1) {
    // 计算偏移量时包括上缓冲区的列表项
    let size = positionBuffer.value[start.value].top - (positionBuffer.value[start.value - aboveCount.value]
      ? positionBuffer.value[start.value - aboveCount.value].top : 0);
    return positionBuffer.value[start.value - 1].bottom - size;
  }
  return 0;
};

// 滚动回调
const handleScroll = (event: any) => {
  const { scrollTop } = event.target;
  start.value = getStartIndex(scrollTop);
  end.value = start.value + visibleCount.value;
  currentOffset.value = getCurrentOffset();
};

const eachItem = (node: any) => {
  // 获取 真实DOM高度
  // const { height } = node.getBoundingClientRect();
  // console.log(node.offsetHeight);
  const height = node.offsetHeight;
  const index = Number(node.dataset.index || 0);
  // 根据 元素索引 获取 缓存列表对应的列表项
  let oldHeight = positionBuffer.value[index].height;
  // dValue：真实高度与预估高度的差值 决定该列表项是否要更新
  let dValue = oldHeight - height;
  console.log(dValue);
  // 如果有高度差 !!dValue === true
  if (dValue) {
    const newBuffer = positionBuffer.value;
    // 更新对应列表项的 bottom 和 height
    newBuffer[index].bottom -= dValue;
    newBuffer[index].height = height;
    // 依次更新positions中后续元素的 top bottom
    for (let k = index + 1; k < newBuffer.length; k++) {
      newBuffer[k].top = newBuffer[k - 1].bottom;
      newBuffer[k].bottom -= dValue;
    }
    positionBuffer.value = newBuffer;
  }
};

// 渲染后更新positions
const updatePositionBuffer = () => {
  itemEls.value.forEach(eachItem);
};

watch(() => props.items, () => {
  positionBuffer.value = [];
  if (list?.value) {
    list.value.scrollTop = 0;
  }
  start.value = 0;
  visibleCount.value = Math.ceil((list?.value?.clientHeight || 0) / props.perItemHeight);
  end.value = start.value + visibleCount.value;
  props.items.forEach((item, index) => {
    positionBuffer.value[index] = {
      top: index * props.perItemHeight,
      bottom: (index + 1) * props.perItemHeight,
      height: props.perItemHeight,
    };
  });
}, { immediate: true });

const handleResize = debounce((event: any) => {
  visibleCount.value = Math.ceil((list?.value?.clientHeight || 0) / props.perItemHeight);
  end.value = start.value + visibleCount.value;
  return event;
}, 160);


onMounted(() => {
  visibleCount.value = Math.ceil((list?.value?.clientHeight || 0) / props.perItemHeight);
  end.value = start.value + visibleCount.value;
  list?.value?.addEventListener('scroll', debounce(handleScroll, 160));
  list?.value?.addEventListener('scroll', throttle(handleScroll, 80));
});

onUpdated(() => {
  nextTick(() => {
    if (!props.computeRealItemHeight || !itemEls.value?.length) {
      return;
    }
    // 根据真实元素大小，修改对应的缓存列表
    debounce(updatePositionBuffer, 160)();
    // 更新完缓存列表后，重新赋值偏移量
    currentOffset.value = getCurrentOffset();
  });
});
</script>

<style lang="scss" scoped>
@import "./RxzList.scss";
</style>
