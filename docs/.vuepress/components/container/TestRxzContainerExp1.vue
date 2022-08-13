<template>
  <rxz-button @click="changePos">切换位置</rxz-button>
  <rxz-container class="container" :position="position">
    test-container
  </rxz-container>
</template>
<script>
import { RxzContainerPosition } from '@/components';
export default {
  data () {
    return {
      position: RxzContainerPosition.CENTER,
      index: 0,
      positions: Object.values(RxzContainerPosition),
    }
  },
  methods: {
    changePos() {
      this.position = this.positions[this.index++];
      if (this.index >= this.positions.length) {
        this.index = 0;
      }
    }
  },
};
</script>
<style lang="scss" scoped>
.container {
  width: 100%;
  height: 400px;
  background-color: grey;
}
</style>
