<!--
Component: RxzCountDownButton
* @FileDescription: 倒计时按钮
* @Author: ruixiaozi
* @Email: admin@ruixiaozi.com
* @Date: 2021年04月28日 11:52:41
* @Version: 1.0.1
-->
<template>
  <rxz-button :disabled="isStart" :type="type"  @click="click">
    <!-- //倒计时显示的文字 -->
    <slot name="countdownValue" v-if="isStart"></slot>
    <span v-if="isStart">({{sec}}s)</span>
    <!--  //普通显示的文字(默认插槽) -->
    <slot v-if="!isStart"></slot>
  </rxz-button>
</template>

<script>
import RxzButton from "@/components/Base/RxzButton/index.js";
export default {
  // Component name
  name: 'RxzCountDownButton',
  // Component props
  model: {
    prop: 'isStart',
    event: 'update:isStart'
  },
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


  },
  // Locally registered components
  components: {
    RxzButton
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
      this.operate(n);
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
    },
    operate(isStart){
      if(isStart){
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
  // Lifecycle hooks
  mounted(){
    this.operate(this.isStart);
  }
};
</script>

<style lang="scss" scoped>

</style>
