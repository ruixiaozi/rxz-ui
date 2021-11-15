<!--
Component: RxzInput
* @FileDescription: 表单input
* @Author: ruixiaozi
* @Email: admin@ruixiaozi.com
* @Date: 2021年10月11日 11:08:04
* @Version: 1.0.20
-->
<template>
  <div class="rxz-input">
    <input
      :type="type"
      autocomplete="off"
      :placeholder="placeholder"
      class="rxz-input-native"
      :value="value"
      @input="handleInput"
      @blur="handleBlur"
    />
  </div>
</template>

<script>
export default {
  // Component name
  name: "RxzInput",
  model:{
    prop:"value",
    event:"input"
  },
  // Component props
  props: {
    type: {
      type: String,
      default: "text",
    },
    placeholder: {
      type: String,
      default: "请输入内容",
    },
    value:{
      type:String,
      default:""
    }
  },
  inject:['rxzFormItem'],
  // Locally registered components
  components: {},
  // Component status
  data() {
    return {};
  },
  // Calculate attribute
  computed: {},
  // Component watch
  watch: {},
  // Component methods
  methods: {

    handleInput(e) {
      const value = e.target.value;
      this.$emit('input', value);
      this.rxzFormItem && this.rxzFormItem.onFieldChange();
    },
    handleBlur() {
      this.rxzFormItem && this.rxzFormItem.onFieldBlur();
    }

  },
  // Lifecycle hooks
};
</script>

<style lang="scss" scoped>
.rxz-input {
  width: 180 px;
  position: relative;
  font-size: 14px;
  display: inline-block;
  .rxz-input-native {
    appearance: none;
    background-color: #fff;
    border-radius: 5px;
    border: 1px solid #d5d8dd;
    box-sizing: border-box;
    color: #56575a;
    display: inline-block;
    font-size: inherit;
    height: 35px;
    line-height: 35px;
    outline: none;
    padding: 0 10px;
    transition: border 0.2s;
    width: 100%;
  }

  .rxz-input-native:hover{
    border: 1px solid #949597;
  }

}
</style>
