<!--
Component: RxzCountdownButton
* @FileDescription: 倒计时按钮
* @Author: ruixiaozi
* @Email: admin@ruixiaozi.com
* @Date: 2021年04月28日 11:52:41
* @Version: 1.0.1
-->
<template>
  <el-button :disabled="isStart" :type="type" :size="size" @click="click">
    <!-- //倒计时显示的文字 -->
    <slot name="countdownValue" v-if="isStart"></slot>
    <span v-if="isStart">({{sec}}s)</span>
    <!--  //普通显示的文字 -->
    <slot name="value" v-if="!isStart"></slot>
  </el-button>
</template>

<script>

export default {
  // Component name
  name: 'RxzCountdownButton',
  // Component props
  props: {
    //是否开始
    isStart:{
      type: Boolean,
      default: false
    },
    //倒计时秒数
    seconds:{
      type: Number,
      default: 60
    },
    type:{
      type: String,
      default: 'primary'
    },
    size:{
      type: String,
      default: 'mini'
    }

  },
  // Locally registered components
  components: {

  },
  // Component status
  data () {
    return {
      timer:null,
      sec: this.seconds
    }
  },
  // Calculate attribute
  computed: {

  },
  // Component watch
  watch: {
    isStart(n,o){
      if(n == true){
        this.timer = setInterval(this.countDown,1000);
        this.sec = this.seconds;
      }
      else{
        if(this.timer){
          clearInterval(this.timer);
        }
      }
    }
  },
  // Component methods
  methods: {
    countDown(){
      if(--this.sec <= 0){
        this.$emit("update:isStart",false);
      }
    },
    click(){
      this.$emit("click");
    }
  },
  // Lifecycle hooks
};
</script>

<style lang="scss" scoped>

</style>
