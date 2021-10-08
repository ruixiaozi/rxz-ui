<template>
  <div class="container" v-rxz-echarts:ec1="option">
  </div>
</template>
<script>
export default {
  data () {
    return {
      option:{
        title: {
          text: 'ECharts 入门示例'
        },
        tooltip: {},
        xAxis: {
          data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
        },
        yAxis: {},
        series: [
          {
            name: '销量',
            type: 'bar',
            data: [5, 20, 36, 10, 10, 20]
          }
        ]
      }
    }
  }
};
</script>
<style lang="scss" scoped>
.container{
  width: 400px;
  height: 400px;
}
</style>
