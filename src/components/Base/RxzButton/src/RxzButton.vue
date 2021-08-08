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
      {'is-disabled': disabled || loading},
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
    <rxz-icon v-if="loading" name="spinner" spinner></rxz-icon>

    <!-- 如果有内容才显示插槽内容 -->
    <span v-if="$slots.default"><slot></slot></span>
    <span v-else>RxzButton</span>
  </button>
</template>

<script>
import RxzIcon from '@/components/Base/RxzIcon/index.js';

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
    //"primary","success","information"
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
    RxzIcon

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
@use "~@/themes/themeify";
.rxz-button{
  transition: all 0.1s;
  cursor: pointer;
  //默认样式，有边框
  border: 1px solid #d5e7fc;
  @include themeify.theme_color("default",false);
  &:hover{
    @include themeify.theme_color("default",true);
  }


  //不同类型的按钮样式（使用主题类型颜色）
  @each $type in "primary","success","information"{
    &.rxz-button-#{$type}{
      border: none;
      @include themeify.theme_color($type,false);
      &:hover{
        @include themeify.theme_color($type,true);
      }
    }
  }

  //不可用中的样式
  &.is-disabled{
    //禁止出发hover等效果
    position: relative;
    cursor: not-allowed !important;

    //添加一个蒙版，变成不可用样式
    &:before {
      content: "";
      position: absolute;
      left: -1px;
      top: -1px;
      right: -1px;
      bottom: -1px;
      border-radius: inherit;
      background-color: hsla(0,0%,100%,.35);

    }
  }










}
</style>
