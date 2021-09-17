<!--
Component: RxzLoading
* @FileDescription: 加载组件
* @Author: ruixiaozi
* @Email: admin@ruixiaozi.com
* @Date: 2021年09月17日 17:45:02
* @Version: 1.0.12
-->
<template>
  <div class="rxz-loading">
    <div class="rxz-loading-loading" v-if="loading"
      :style="{
        'background-color':bgColor,
        'color':color
      }">
      <span class="rxz-loading-loading-text">{{text}}</span> <rxz-icon name="spinner" spinner></rxz-icon>
    </div>
    <slot v-else></slot>
  </div>
</template>

<script>
import RxzIcon from '../../RxzIcon';
export default {
  // Component name
  name: 'RxzLoading',
  // Component props
  props: {
    loading:{
      type:Boolean,
      default:true
    },
    text:{
      type:String,
      default:"加载中"
    },
    //遮罩颜色
    bgColor:{
      type:String,
      default:"#0000002F"
    },
    //文字和图标颜色
    color:{
      type:String,
      default:"#FFFFFF"
    }
  },
  // Locally registered components
  components: {
    RxzIcon
  },
  // Component status
  data () {
    return {}
  },
  // Calculate attribute
  computed: {

  },
  // Component watch
  watch: {

  },
  // Component methods
  methods: {

  },
  // Lifecycle hooks
};
</script>

<style lang="scss" scoped>
.rxz-loading{
  width: 100%;
  height: 100%;
  &-loading{
    width: 100%;
    height: 100%;
    //background-color: rgba($color: #000000, $alpha: 0.2);
    display: flex;
    justify-content: center;
    align-items: center;
    //color: white;
    &-text{
      margin: 0px 5px;
    }

  }
}
</style>
