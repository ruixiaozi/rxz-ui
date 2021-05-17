<!--
Component: RxzButton
* @FileDescription: 通用按钮
* @Author: ruixiaozi
* @Email: admin@ruixiaozi.com
* @Date: 2021年05月07日 16:46:13
* @Version: 1.0.0
-->
<template>
  <button
    class="rxz-button"
    @click="handleClick"
    :type="nativeType"
    :disabled="disabled || loading"
    :class="[
      type ? 'rxz-button-' + type : '',
      {'is-disabled': disabled},
      {'is-loading': loading}
    ]"
    :style="[
      {width: width},
      {height: height},
      {padding: padding}
    ]"
  >
    <i class="fa fa-spinner fa-spin" v-if="loading"></i>

    <!-- 如果有内容才显示插槽内容 -->
    <span v-if="$slots.default"><slot></slot></span>
    <span v-else>RxzButton</span>
  </button>
</template>

<script>

export default {
  // Component name
  name: 'RxzButton',
  // Component props
  props: {
    //是否可用
    disabled: {
      type: Boolean,
      default: false
    },
    //是否加载中
    loading: {
      type: Boolean,
      default: false
    },
    //类型
    type: {
      type: String,
      default: "default"
    },
    width: {
      type: String,
      default: "auto"
    },
    height: {
      type: String,
      default: "40px"
    },
    padding:{
      type: String,
      default: "5px 20px"
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
    nativeType(){
      return "";
    }
  },
  // Component watch
  watch: {

  },
  // Component methods
  methods: {
    handleClick(event){
      this.$emit("click",event);
    }
  },
  // Lifecycle hooks
};
</script>

<style lang="scss" scoped>
.rxz-button{
  transition: all 0.1s;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &.rxz-button-default{
    border: 1px solid #d5e7fc;
    color: #000000;
    background-color: #FFFFFF;
    &:hover{
      background-color: #ECF5FF;
      color: #409eff;
    }
  }

  //主要按钮
  &.rxz-button-primary{
    background-color: #409eff;
    &:hover{
      background-color: #5baaf8;
    }
  }

  &.rxz-button-success{

  }
}
</style>
