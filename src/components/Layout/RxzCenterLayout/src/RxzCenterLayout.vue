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
    <div class="content">
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

  .content {
    //包裹内容
    //最大100%，超出出现滚动条
    height: fit-content;
    width: fit-content;

    max-height: 100%;
    max-width: 100%;
    overflow: auto;



  }
}
</style>
