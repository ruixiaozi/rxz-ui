<template>
  <div class="rxz-menu" :class="[direction, `level-${level}`]">
    <div
      class="rxz-menu-item"
      v-for="(item, index) in menuItems"
      v-show="!isFold || item.icon"
      :class="[`level-${level}`]"
      :key="index"
      :ref="`item-${index}`"
    >
      <a
        :href="item.path"
        @click="handleClick($event, item)"
        @mouseover="openPopper(item, index)"
        @mouseleave="closePopper(item)"
        :class="[
          `level-${level}`,
          currentStyle,
          {
            active: item.active,
          },
        ]"
      >
        <rxz-icon
          class="rxz-menu-item-icon"
          v-show="item.icon"
          :name="item.icon"
          :size="16"
        ></rxz-icon>
        <span v-show="!isFold" v-rxz-overflow class="rxz-menu-item-text">{{ item.name }}</span>
        <rxz-icon
          v-show="!isFold && item.children"
          class="rxz-menu-item-arrow"
          :name="getArrow(item)"
          :size="16"
        ></rxz-icon>
      </a>
      <rxz-menu
        class="rxz-menu-item-sub"
        v-if="item.children && childrenStyleCPT === 'inner' && !item.isFold"
        :items="item.children"
        :active="active"
        :direction="direction"
        :currentStyle="childrenStyleCPT"
        :childrenStyle="nextChildrenStyle"
        :isFold="false"
        :level="nextLevel"
        :canFold="false"
      ></rxz-menu>
    </div>
  </div>
</template>

<script lang="ts">
import { RxzMenuCnt } from './RxzMenu.component';
export default RxzMenuCnt;
</script>

<style lang="scss" scoped>
@import "./RxzMenu.scss";
</style>
