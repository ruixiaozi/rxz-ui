<!--
Component: RxzCenterLayout
* @FileDescription: 居中视图
* @Author: ruixiaozi
* @Email: admin@ruixiaozi.com
* @Date: 2021年08月02日 11:02:33
* @Version: 1.0.7
-->
<template>
  <div class="rxz-center-layout">
    <div class="rxz-center-layout-content" :class="[
      {'no-scroll':!isScroll},
      {'show-shadow':showShadow}
    ]">
      <slot></slot>
    </div>
  </div>
</template>

<script>

export default {
  // Component name
  name: 'RxzCenterLayout',
  // Component props
  props: {
    //超出最大高度是否滚动
    //不滚动：内部最大高度也是这个布局的最大高度
    isScroll:{
      type:Boolean,
      default:true
    },
    showShadow: {
      tyep:Boolean,
      default:false
    }
  },
  // Locally registered components
  components: {

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
.rxz-center-layout{
  //绝对定位，充满父容器
  position: absolute;
  width: 100%;
  height: 100%;
  //对内容区域进行flex布局
  //实现垂直\水平居中
  display: flex;
  justify-content: center;
  align-items: center;

  &-content {
    position: relative;
    //最大100%，超出出现滚动条
    max-height: 100%;
    max-width: 100%;
    overflow: auto;

    //这样内部的高度最大也只有max-height
    //由内部去控制滚动等
    &.no-scroll{
      overflow: hidden;
      display: flex;
      flex-direction: column;
    }
    //显示阴影
    &.show-shadow{
      box-shadow: 0px 0px 5px 2px rgb(0 0 0 / 20%);
    }

  }
}
</style>
