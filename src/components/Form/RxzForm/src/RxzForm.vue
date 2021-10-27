<!--
Component: RxzForm
* @FileDescription: 表单组件
* @Author: ruixiaozi
* @Email: admin@ruixiaozi.com
* @Date: 2021年08月15日 14:44:07
* @Version: 1.0.11
-->
<template>
  <form class="rxz-form" >
    <slot></slot>
  </form>
</template>

<script>

export default {
  // Component name
  name: 'RxzForm',
  // Component props
  props: {
    //验证规则对象
    validate:{
      type:Object,
      default:()=>{return {}}
    },
    labelWidth:{
      type:String,
      default:"100px"
    }

  },
  provide(){
    return {
      labelWidth:this.labelWidth,
      validate:this.validate
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
.rxz-form{
  position: relative;
}
</style>
