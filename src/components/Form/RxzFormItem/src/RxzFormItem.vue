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
    <rxz-label :isRequired="isRequired" :width="labelWidth">
      <slot name="label">{{label}}</slot>
    </rxz-label>
    <div class="rxz-form-item-content">
      <slot ></slot>
      <div  class="rxz-form-item-content-error">{{message}}</div>
    </div>

  </div>
</template>

<script>
import AsyncValidator from 'async-validator';
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
    attr:{
      type:String,
      default:""
    }
  },
  inject: ['labelWidth','rxzForm'],
  provide(){
    return {
      rxzFormItem:this
    }
  },
  // Locally registered components
  components: {
    RxzLabel
  },
  // Component status
  data () {
    return {
      isRequired: false,
      isShowMes: false,
      message: '',
      labelFor: 'input' + new Date().valueOf(),
      initialValue :''
    }
  },
  // Calculate attribute
  computed: {
    fieldValue() {
      return this.rxzForm && this.attr && this.rxzForm.data[this.attr];
    }
  },
  // Component watch
  watch: {

  },
  // Component methods
  methods: {
    setValidata() {
      let validata = this.getValidata();
      if (validata.length) {
        validata.forEach(val => {
          if (val.required !== undefined) this.isRequired = val.required
        });
      }

    },
    getValidata() {
      let validatas = this.rxzForm && this.rxzForm.validatas;
      validatas = validatas ? validatas[this.attr] : [];
      return validatas;
    },
    onFieldBlur(){
      this.validate('blur');
    },
    onFieldChange(){
      this.validate('change');
    },
    // 过滤出符合要求(触发状态)的 validata 规则
    getFilteredValidata (trigger) {
      const validata = this.getValidata();
      return validata.filter(val => !val.trigger || val.trigger.indexOf(trigger) !== -1);
    },
    /**
     * 校验表单数据
     * @param trigger 触发校验类型
     * @param callback 回调函数
     */
    validate(trigger, cb) {
      let validata = this.getFilteredValidata(trigger);
      if(!validata || validata.length === 0) return true;
      // 使用 async-validator
      const validator = new AsyncValidator({ [this.attr]: validata });
      let model = {[this.attr]: this.fieldValue};
      validator.validate(model, { firstFields: true }, errors => {
        this.isShowMes = errors ? true : false;
        this.message = errors ? errors[0].message : '';
        if (cb) cb(this.message);
      })
    },
    resetField () {
      this.message = '';
      if(this.rxzForm)
        this.rxzForm.data[this.attr] = this.initialValue;
    },
  },
  // Lifecycle hooks
  mounted(){
    if(this.attr ){
      this.rxzForm && this.rxzForm.addField && this.rxzForm.addField(this);

      this.initialValue = this.fieldValue;
      this.setValidata();

    }
  },
  beforeDestroy(){
    if(this.rxzForm && this.rxzForm.removeField){
      this.rxzForm.removeField(this);
    }
  }
};
</script>

<style lang="scss" scoped>
.rxz-form-item{
  width: 100%;
  display: flex;
  //align-items: center;

  &-content{

    &-error{
      color: red;
      font-size: 12px;
      padding: 3px;
      height: 16px;
    }
  }
}
</style>
