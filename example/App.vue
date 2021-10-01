<template>
  <div id="app">

    <div style="border:1px solid #000;overflow:hidden">
      <rxz-flip-card  :isFront="isFront" @mouseover="isFront=false" @mouseout="isFront=true">
        <template v-slot:front>
          <div style="background-color:red;width:100%;height:100%">front</div>
        </template>
        <template v-slot:back>
          <div style="background-color:green;width:100%;height:100%">back</div>
        </template>
      </rxz-flip-card>
    </div>
    <rxz-dialog :visible.sync="isVisible">
      <template slot="title">sdf</template>
      <div>我爱尸毒方剂aasdfaasdfaasdfaasdfaasdfaasdfaasdfadf</div>

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
      isFront:true,
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
  overflow: hidden;
  .loading-test{
    width: 400px;
    height: 300px;
  }
}
</style>
