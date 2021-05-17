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
      {back}
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
      default: "100px"
    },
    height: {
      type: String,
      default: "40px"
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

}
</style>
