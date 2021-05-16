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
    disabled: {
      type: Boolean,
      default: false
    },
    loading: {
      type: Boolean,
      default: false
    },
    type: {
      type: String,
      default: "primary"
    },
    width:{
      type: String,
      default: ""
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
    handleClick(){

    }
  },
  // Lifecycle hooks
};
</script>

<style lang="scss" scoped>
.rxz-button{

}
</style>
