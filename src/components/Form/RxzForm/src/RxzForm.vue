<!--
Component: RxzForm
* @FileDescription: 表单组件
* @Author: ruixiaozi
* @Email: admin@ruixiaozi.com
* @Date: 2021年08月15日 14:44:07
* @Version: 1.0.11
-->
<template>
  <form class="rxz-form" action="">
    <slot></slot>
  </form>
</template>

<script>

export default {
  // Component name
  name: 'RxzForm',
  model:{
    prop: 'data',
    event: 'update:data'
  },
  // Component props
  props: {
    data:{
      type:Object,
      default:()=>{return {}}
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
    //表单数据
    formData:{
      get(){
        return this.data;
      },
      set(value){
        this.$emit("update:data",value);
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
.rxz-form{
  position: relative;
}
</style>
