<!--
Component: RxzWaveProcess
* @FileDescription: 水波进度组件
* @Author: ruixiaozi
* @Email: admin@ruixiaozi.com
* @Date: 2021年09月25日 16:53:18
* @Version: 1.0.16
-->
<template>
  <div class="rxz-wave-process"
    :style="{
      width:width,
      height:height,
      'border-radius': borderRadius,
      border:border
    }">

    <div class="rxz-wave-process-water"
      :style="{
        'background-image':waterBackgroudImage
      }"></div>
    <div class="rxz-wave-process-wave"
      :style="{
        'background-color':emptyColor,
        'top':waveTop
      }"></div>

    <div class="rxz-wave-process-info"
      :style="{
        ...infoCss
      }">{{process}}</div>
  </div>

</template>

<script>

export default {
  // Component name
  name: 'RxzWaveProcess',
  // Component props
  props: {
    process:{
      type:Number,
      default:0
    },
    width: {
      type: String,
      default: "100px"
    },
    height: {
      type: String,
      default: "100px"
    },
    border:{
      type: String,
      default: "solid 1px #07c2b7"
    },
    borderRadius: {
      type: String,
      default: "50px"
    },
    waterColor: {
      type: String,
      default: "#07c2b7"
    },
    emptyColor:{
      type: String,
      default: "#ffffff"
    },
    infoCss: {
      type: Object,
      default: ()=>{
        return {
          "color": "#000",
          "font-size": "16px",
          "font-weight": "bold",
        }
      }
    },
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
    waterBackgroudImage(){
      let re =  `linear-gradient(-180deg, ${this.waterColor} 13%, ${this.waterColor} 100%)`
      console.log(re);
      return re;
    },
    waveTop(){
      return 100 - this.process + "%";
    }
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
@keyframes wave {
  50% {
    transform: translate(-50%, -101%) rotate(500deg);
  }
  100% {
    transform: translate(-50%, -101%) rotate(1000deg);
  }
}

.rxz-wave-process{

  overflow: hidden;
  position: relative;



  &-water{
    position: relative;
    width: 100%;
    height: 100%;
  }

  &-wave{
    position: absolute;
    width: 200%;
    height: 200%;
    top: 0;
    left: 50%;
    border-radius: 40%;
    transform: translate(-50%, -101%) rotate(0);
    animation: wave 20s linear infinite;
    z-index: 20;
  }

  &-info{
    position: absolute;
    width: 100%;
    height: 100%;
    top:0;
    left: 0;
    z-index: 100;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

}
</style>
