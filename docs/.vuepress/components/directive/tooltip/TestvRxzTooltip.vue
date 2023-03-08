<template>
  <rxz-container class="container">
    <template v-slot:topcenter>
      <div class="h-show">
        <span v-rxz-tooltip:topleft>topleft</span>
        <span v-rxz-tooltip:top>top</span>
        <span v-rxz-tooltip:topright>topright</span>
      </div>
    </template>
    <template v-slot:centerleft>
      <p v-rxz-tooltip:lefttop>lefttop</p>
      <p v-rxz-tooltip:left>left</p>
      <p v-rxz-tooltip:leftbottom>leftbottom</p>
    </template>
    <template v-slot:bottomcenter>
      <div class="h-show">
        <span v-rxz-tooltip:bottomleft>bottomleft</span>
        <span v-rxz-tooltip:bottom>bottom</span>
        <span v-rxz-tooltip:bottomright>bottomright</span>
      </div>
    </template>
    <template v-slot:centerright>
      <p v-rxz-tooltip:righttop>righttop</p>
      <p v-rxz-tooltip:right>right</p>
      <p v-rxz-tooltip:rightbottom>rightbottom</p>
    </template>
  </rxz-container>
</template>

<script setup lang="ts">
defineProps<{

}>();
defineEmits<{

}>();

</script>

<style lang="scss" scoped>
.container {
  width: 400px;
  height: 210px;
  margin-bottom: 50px;
}
.h-show > * {
  margin-right: 20px;
}
</style>
