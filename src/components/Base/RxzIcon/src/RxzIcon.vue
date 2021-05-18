<!--
Component: RxzIcon
* @FileDescription: 图标
* @Author: ruixiaozi
* @Email: admin@ruixiaozi.com
* @Date: 2021年05月18日 10:05:30
* @Version: 1.0.3
-->
<template>
  <i class="fa"
    :class="[
      'fa-' + name,
      'fa-rotate-' + rotate,
      CPTSize,
      {'fa-fw': isFixedWidth},
      {'fa-spin': spinner},
      ...cls,
    ]"
    :style="[
      css
    ]"
  ></i>
</template>

<script>

export default {
  // Component name
  name: 'RxzIcon',
  // Component props
  props: {
    name: {
      type: String,
      default: "info-circle"
    },
    /**
     * normal
     * big
     * big2
     * big3
     * big4
     */
    size: {
      type: String,
      default: "normal"
    },
    //是否固定宽度
    isFixedWidth: {
      type: Boolean,
      default: false
    },
    //是否旋转
    spinner: {
      type: Boolean,
      default: false
    },
    //翻转角度
    rotate: {
      type: String,
      default: "0"
    },
    //class列表
    cls: {
      type: Array,
      default: ()=>{
        return []
      }
    },
    //style对象
    css: {
      type: Object,
      default: ()=>{
        return {}
      }
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
    /**
     * 计算size
     * @function
     * @author ruixiaozi
     * @description 根据size计算实际显示的class
     */
    CPTSize(){
      switch(this.size){
        case "normal":
          return "";
        case "big":
          return "fa-2x";
        case "big2":
          return "fa-3x";
        case "big3":
          return "fa-4x";
        case "big4":
          return "fa-5x";
        default:
          return "";
      }
    }
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

</style>
