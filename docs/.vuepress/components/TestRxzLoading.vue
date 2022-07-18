<template>
  <div class="container">
    <rxz-loading :loading="loading">
      <div class="content">
        我是内容
      </div>
    </rxz-loading>
  </div>
</template>
<script>
export default {
  name: 'TestRxzLoading',
  data () {
    return {
      loading: true
    }
  },
  mounted(){
    setTimeout(()=>{
      this.loading = false;
    },3000);
  }
};
</script>
<style lang="scss" scoped>
.container{
  width: 200px;
  height: 200px;
  .content{
    background-color: green;
    text-align: center;
    color: #ffffff;
    line-height: 200px;
  }
}
</style>
