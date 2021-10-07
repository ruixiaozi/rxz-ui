<template>
  <rxz-count-down-button v-model="isStart" :seconds="10">
    <template v-slot:countdownValue>等待中</template>
    按钮
  </rxz-count-down-button>
</template>

<script>

export default {
  data () {
    return {
      isStart:true
    }
  },

};
</script>

<style lang="scss" scoped>

</style>
