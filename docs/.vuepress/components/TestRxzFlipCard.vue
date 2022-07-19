<template>
  <rxz-flip-card :isFront="isFront" @mouseover="isFront = false" @mouseout="isFront = true">
    <template v-slot:front>
      <p class="front">我是正面</p>
    </template>
    <template v-slot:back>
      <p class="back">我是反面</p>
    </template>
  </rxz-flip-card>
</template>
<script lang="ts">
export default {
  name: 'TestRxzFlipCard',
  data () {
    return {
      isFront:true
    }
  }
};
</script>
<style lang="scss" scoped>
.front{
  background-color: green;
}
.back{
  background-color: blue;
}
.front,.back{
  color: #ffffff;
  width: 100%;
  height: 100%;
}
</style>
