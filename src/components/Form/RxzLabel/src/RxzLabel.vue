<!--
Component: RxzLabel
* @FileDescription: 标签
* @Author: ruixiaozi
* @Email: admin@ruixiaozi.com
* @Date: 2021年10月11日 10:02:49
* @Version: 1.0.20
-->
<template>
  <div class="rxz-label" :style="{
      'text-align':textAlign,
      width:width
    }">
    <span v-if="isRequired">*</span><slot></slot>
  </div>
</template>

<script>

export default {
  // Component name
  name: 'RxzLabel',
  // Component props
  props: {
    textAlign:{
      type:String,
      default:"right"
    },
    width:{
      type:String,
      default:"100px"
    },
    isRequired:{
      type:Boolean,
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
.rxz-label{
  display: inline-block;
  font-size: 14px;
  color: #4c4d50;
  padding-right: 10px;
  line-height: 35px;
}
</style>
