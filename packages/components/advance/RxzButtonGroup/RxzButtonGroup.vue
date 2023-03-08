<template>
  <div class="rxz-button-group">
    <RxzButton
      v-for="(botton, index) in displayButtons"
      :key="index"
      v-bind="botton"
      :link="link"
    >
      {{ botton.text }}
    </RxzButton>
    <RxzSelect
      v-if="hasMore"
      :modelValue="{ label: i18n('button_more'), value: '', key: '' }"
      :isButton="!link"
      width="fit-content"
      :options="moreOptions"
    ></RxzSelect>
  </div>
</template>

<script setup lang="ts">
import { useRxzI18n } from '@/use';
import { RxzButton } from '@/components/base/RxzButton';
import { RxzSelect } from '@/components/base/RxzSelect';
import { defineProps, defineEmits, computed } from 'vue';
import define from './RxzButtonGroup.define';

const { i18n } = useRxzI18n();

const props = defineProps(define.rxzButtonGroupProps);
defineEmits(define.rxzButtonGroupEmits);

const hasMore = computed(() => props.buttons.length > props.max);
const displayButtons = computed(() => (hasMore.value ? props.buttons.slice(0, 2) : props.buttons));
const moreOptions = computed(() => (hasMore.value ? props.buttons.slice(2).map((item) => ({
  label: item.text,
  value: item.text,
  key: item.text,
  onClick: item.onClick,
})) : []));

</script>

<style lang="scss" scoped>
@import "./RxzButtonGroup.scss";
</style>
