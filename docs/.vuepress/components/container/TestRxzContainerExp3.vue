<template>
  <rxz-container class="container">
    <template v-for="slotName in slotNames" v-slot:[slotName]>test-container</template>
  </rxz-container>
</template>
<script>
import { RxzContainerSlotEnum } from '@/components'
export default {
  data() {
    return {
      slotNames: Object.values(RxzContainerSlotEnum)
    }
  }
}
</script>
<style lang="scss" scoped>
.container {
  width: 100%;
  height: 400px;
  background-color: grey;
}
</style>
