<!--
Component: RxzFormItem
* @FileDescription: 表单项组件
* @Author: ruixiaozi
* @Email: admin@ruixiaozi.com
* @Date: 2021年10月03日 19:26:01
* @Version: 1.0.19
-->
<template>
  <div class="rxz-form-item">
    <rxz-label :width="labelWidth">
      <slot name="label">{{label}}</slot>
    </rxz-label>
    <div class="rxz-form-item-content">
      <slot></slot>
      <div class="rxz-form-item-content-error"></div>
    </div>

  </div>
</template>

<script>
import  RxzLabel  from "@/components/Form/RxzLabel";
export default {
  // Component name
  name: 'RxzFormItem',
  // Component props
  props: {
    label:{
      type:String,
      default:""
    },
    validateProp:{
      type:String,
      default:""
    }
  },
  inject: ['labelWidth'],
  // Locally registered components
  components: {
    RxzLabel
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
.rxz-form-item{
  width: 100%;
  display: flex;
  //align-items: center;
  margin-bottom: 20px;
}
</style>
