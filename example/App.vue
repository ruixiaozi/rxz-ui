<template>
  <div id="app">
    <rxz-theme>
      <rxz-center-layout>
        <div style="border: 1px solid">
          <img alt="Vue logo" src="./assets/logo.png" />
          <rxz-button bgColor="red" hoverBgColor="green" textColor="white"
            >test</rxz-button
          >
          <rxz-button type="info2" @click="isVisible=true">test</rxz-button>
          <rxz-button type="primary" :disabled="true">test</rxz-button>
          <rxz-count-down-button type="primary" v-model="isStart" :seconds="40">
            <span slot="countdownValue">2</span>
            1
          </rxz-count-down-button>
          <rxz-button type="success" loading> test</rxz-button>
          <div style="width:200px;height:200px" v-rxz-echarts:e1="op">123</div>
        </div>

      </rxz-center-layout>
    </rxz-theme>
    <rxz-dialog :visible.sync="isVisible">
      <template slot="title">sdf</template>
      <div>我爱尸毒方剂束带结发克拉斯记得发我爱尸毒方剂束带结发克拉斯记得发我爱尸毒方剂束带结发克拉斯记得发我爱尸毒方剂束带结发克拉斯记得发我爱尸毒方剂束带结发克拉斯记得发</div>
<div>sdfasdfasasdfaasdfaasdfaasdfaasdfaasdfaasdfaasdfaasdfaasdfaasdfaasdfaasdfadf</div>
<div>sdfasdfasasdfaasdfaasdfaasdfaasdfaasdfaasdfaasdfaasdfaasdfaasdfaasdfaasdfadf</div>
<div>sdfasdfasasdfaasdfaasdfaasdfaasdfaasdfaasdfaasdfaasdfaasdfaasdfaasdfaasdfadf</div>
<div>sdfasdfasasdfaasdfaasdfaasdfaasdfaasdfaasdfaasdfaasdfaasdfaasdfaasdfaasdfadf</div>
<div>sdfasdfasasdfaasdfaasdfaasdfaasdfaasdfaasdfaasdfaasdfaasdfaasdfaasdfaasdfadf</div>
<div>sdfasdfasasdfaasdfaasdfaasdfaasdfaasdfaasdfaasdfaasdfaasdfaasdfaasdfaasdfadf</div>
<div>sdfasdfasasdfaasdfaasdfaasdfaasdfaasdfaasdfaasdfaasdfaasdfaasdfaasdfaasdfadf</div>
<div>sdfasdfasasdfaasdfaasdfaasdfaasdfaasdfaasdfaasdfaasdfaasdfaasdfaasdfaasdfadf</div>
<div>sdfasdfasasdfaasdfaasdfaasdfaasdfaasdfaasdfaasdfaasdfaasdfaasdfaasdfaasdfadf</div>
<div>sdfasdfasasdfaasdfaasdfaasdfaasdfaasdfaasdfaasdfaasdfaasdfaasdfaasdfaasdfadf</div>
<div>sdfasdfasasdfaasdfaasdfaasdfaasdfaasdfaasdfaasdfaasdfaasdfaasdfaasdfaasdfadf</div>
<div>sdfasdfasasdfaasdfaasdfaasdfaasdfaasdfaasdfaasdfaasdfaasdfaasdfaasdfaasdfadf</div>
<div>sdfasdfasasdfaasdfaasdfaasdfaasdfaasdfaasdfaasdfaasdfaasdfaasdfaasdfaasdfadf</div>
<div>sdfasdfasasdfaasdfaasdfaasdfaasdfaasdfaasdfaasdfaasdfaasdfaasdfaasdfaasdfadf</div>
<div>sdfasdfasasdfaasdfaasdfaasdfaasdfaasdfaasdfaasdfaasdfaasdfaasdfaasdfaasdfadf</div>

    </rxz-dialog>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},
  data() {
    return {
      isStart: true,
      isVisible: false,
      op:{
        xAxis: {
            type: 'category',
            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        },
        yAxis: {
            type: 'value'
        },
        series: [{
            data: [150, 230, 224, 218, 135, 147, 260],
            type: 'line'
        }]
    }
    };
  },
  mounted(){
    let arr = [1,3,7,2,5,4,2];
    console.log(this.$rxz.array.sort(arr,"desc"));
  }
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
