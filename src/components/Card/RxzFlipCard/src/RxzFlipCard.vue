<!--
Component: RxzFlipCard
* @FileDescription: 翻转卡片组件
* @Author: ruixiaozi
* @Email: admin@ruixiaozi.com
* @Date: 2021年09月27日 17:18:18
* @Version: 1.0.19
-->
<template>
  <div class="rxz-flip-card"
    :style="{
      width:width,
      height:height,
      'border-radius':borderRadius,
      transform:isFront?'rotateY(0deg)':'rotateY(180deg)'
    }"
    v-on="$listeners">

    <div class="rxz-flip-card-front">
      <slot name="front"></slot>
    </div>
    <div class="rxz-flip-card-back">
      <slot name="back"></slot>
    </div>

  </div>
</template>

<script>

export default {
  // Component name
  name: 'RxzFlipCard',
  // Component props
  props: {
    width:{
      type:String,
      default:"100px"
    },
    height:{
      type:String,
      default:"100px"
    },
    borderRadius:{
      type:String,
      default:"none"
    },
    isFront:{
      type:Boolean,
      default:true
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
.rxz-flip-card{
  position: relative;
  transition: transform 0.5s;
  //转换方式（3d）
  transform-style: preserve-3d;

  &-front,&-back{
    position: absolute;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100%;
    //重点：是否显示被旋转的 div 元素的背面：
    backface-visibility: hidden;
  }

  &-back{
    //旋转成背面
    transform: rotateY(180deg);
  }

}
</style>
