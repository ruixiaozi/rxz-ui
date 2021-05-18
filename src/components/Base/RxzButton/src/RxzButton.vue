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
    @mouseover="isHover = true"
    @mouseout="isHover = false"
    :type="nativeType"
    :disabled="disabled || loading"
    :class="[
      type ? 'rxz-button-' + type : '',
      {'is-disabled': disabled},
      {'is-loading': loading},
      ...cls
    ]"
    :style="[
      {width: width},
      {height: height},
      {padding: padding},
      {'border-radius': borderRadius},
      {'background-color':
        (isHover ? CPTHoverBgColor : CPTBgColor )
      },
      css,
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
    /**
     * button
     * reset
     * submit
     */
    nativeType: {
      type: String,
      default: 'button'
    },
    //cls class列表
    cls: {
      type: Array,
      default: ()=>{
        return []
      }
    },
    //CSS属性
    css: {
      type: Object,
      default: ()=>{
        return {}
      }
    },
    width: {
      type: String,
      default: "auto"
    },
    height: {
      type: String,
      default: "auto"
    },
    padding: {
      type: String,
      default: "10px 20px"
    },
    borderRadius: {
      type: String,
      default: "5px"
    },
    bgColor: {
      type: String,
      default: "unset"
    },
    hoverBgColor: {
      type: String,
      default: "unset"
    }

  },
  // Locally registered components
  components: {

  },
  // Component status
  data () {
    return {
      isHover:false
    }
  },
  // Calculate attribute
  computed: {
    /**
     * 计算BgColor
     * @function
     * @author ruixiaozi
     * @description 如果传入了bgColor参数则使用bgColor，否则使用false值
     */
    CPTBgColor(){
      return (this.bgColor && this.bgColor != "unset") ?
              this.bgColor : false;
    },
    /**
     * 计算HoverBgColor
     * @function
     * @author ruixiaozi
     * @description 如果传入了hoverBgColor参数则使用hoverBgColor，否则使用CPTBgColor的值
     */
    CPTHoverBgColor(){
      return (this.hoverBgColor && this.hoverBgColor != "unset") ?
              this.hoverBgColor :
              this.CPTBgColor;
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
  color: #000000;
  border: none;
  cursor: pointer;
  //默认颜色
  background-color: #d5e7fc;

  //默认按钮
  &.rxz-button-default{
    border: 1px solid #d5e7fc;
    background-color: #FFFFFF;
    &:hover{
      background-color: #ECF5FF;
      color: #409eff;
    }
  }

  //主要按钮
  &.rxz-button-primary{
    color: #FFFFFF;
    background-color: #409eff;
    &:hover{
      background-color: #5baaf8;
    }
  }

  //成功按钮
  &.rxz-button-success{
    color: #FFFFFF;
    background-color: #67c23a;
    &:hover{
      background-color: #82c561;
    }
  }

  //信息按钮
  &.rxz-button-info{
    color: #FFFFFF;
    background-color: #767677;
    &:hover{
      background-color: #989899;
    }
  }




}
</style>
