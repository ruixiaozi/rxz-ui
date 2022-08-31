<template>
  <rxz-countdown-button v-model="isStart" :seconds="10" @click="handleClick">
    <template v-slot:countdownValue>等待中</template>
    按钮
  </rxz-countdown-button>
</template>
<script lang="ts">
export default {
  name: 'TestRxzCountdownButton',
  data () {
    return {
      isStart:true
    }
  },
  methods: {
    handleClick() {
      console.log('click');
    }
  }
};
</script>
