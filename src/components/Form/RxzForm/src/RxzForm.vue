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
    data:{
      type:Object,
      default:()=>{return {}}
    },
    //验证规则对象
    validatas:{
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
      rxzForm:this,
    }
  },
  // Locally registered components
  components: {

  },
  // Component status
  data () {
    return {
      fields: []
    }
  },
  // Calculate attribute
  computed: {
  },
  // Component watch
  watch: {

  },
  // Component methods
  methods: {
    addField(field){
      if (field) this.fields.push(field);
    },
    removeField(field){
      if (field.prop) this.fields.splice(this.fields.indexOf(field), 1);
    },
    reset() {
      this.fields.forEach(field => field.resetField())
    },
    submit(cb){
      return new Promise(resolve => {
        let valid = true, count = 0;
        this.fields.forEach(field => {
          field.validate('', error => {
            if (error) valid = false;
            if (++count === this.fields.length) {
              resolve(valid);
              if (typeof cb === 'function') cb(valid);
            }
          })
        })
      })
    }

  },
  // Lifecycle hooks
};
</script>

<style lang="scss" scoped>
.rxz-form{
  position: relative;
}
</style>
