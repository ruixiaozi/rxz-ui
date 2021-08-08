<!--
Component: RxzTheme
* @FileDescription: 主题容器
* @Author: ruixiaozi
* @Email: admin@ruixiaozi.com
* @Date: 2021年08月07日 10:05:30
* @Version: 1.0.10
-->
<template>
<div class="rxz-theme-contaner" :data-theme="theme">
  <slot></slot>
</div>
</template>

<script>

export default {
  // Component name
  name: 'RxzTheme',
  // Component props
  props: {
    theme:{
      type:String,
      default:'default'
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
.rxz-theme-contaner{

  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  border: 0;
}
</style>
