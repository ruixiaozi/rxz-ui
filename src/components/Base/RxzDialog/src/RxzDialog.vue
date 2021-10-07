<!--
Component: RxzDialog
* @FileDescription: 弹窗组件
* @Author: ruixiaozi
* @Email: admin@ruixiaozi.com
* @Date: 2021年08月10日 14:42:09
* @Version: 1.0.10
-->
<template>
  <!-- 全屏遮罩 -->
  <div class="rxz-dialog" v-show="isShow"
    :style="[
      {'z-index':zIndex}
    ]">

    <rxz-center-layout :isScroll="false" :showShadow="true">
      <div class="rxz-dialog-content"
        :style="[
          {'width':width}
        ]"
        >
        <div class="rxz-dialog-content-title"
          :style="[
            {height:titleHeight},
            {color:titleColor},
            {'background-color':titleBgColor},
            {padding:padding}
          ]">
          <span @click="isShow = false">
            <rxz-icon :style="[
              {color:titleColor},
              {'font-size':closeFontSize}
            ]" v-show="isShowClose" name="close" class="rxz-dialog-content-title-close" />
          </span>


          <slot name="title"></slot>
        </div>
        <div class="rxz-dialog-content-body"
          :style="[
            {'background-color':bodyBgColor},
            {'margin-top':titleHeight},
            {padding:padding}
          ]"
         >
          <slot ></slot>
        </div>
      </div>
    </rxz-center-layout>

  </div>
</template>

<script>
import RxzCenterLayout from "@/components/Layout/RxzCenterLayout";
import RxzIcon from "@/components/Base/RxzIcon";
export default {
  // Component name
  name: 'RxzDialog',
  // Component props
  props: {
    //是否显示（支持sync修饰符）
    visible: {
      type: Boolean,
      default: true,
    },
    //层级
    zIndex:{
      type: String,
      default: "3000"
    },
    //宽度
    width: {
      type: String,
      default: "400px",
    },
    //标题栏高度
    titleHeight: {
      type: String,
      default: "50px",
    },
    //是否显示关闭按钮
    isShowClose: {
      type: Boolean,
      default: true,
    },
    //标题部分背景颜色
    titleBgColor: {
      type: String,
      default: '#FFFFFF'
    },
    //标题部分文字、按钮颜色
    titleColor: {
      type: String,
      default: '#000000'
    },
    //body背景颜色
    bodyBgColor: {
      type: String,
      default: '#FFFFFF'
    },
    //内边距
    padding: {
      type: String,
      default: '10px'
    },
    closeFontSize:{
      type: String,
      default: '14px'
    }

  },
  // Locally registered components
  components: {
    RxzCenterLayout,
    RxzIcon
  },
  // Component status
  data () {
    return {
    };
  },
  // Calculate attribute
  computed: {
    isShow: {
      get() {
        return this.visible;
      },
      set(value) {
        this.$emit("update:visible", value);
      },
    },




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
.rxz-dialog {
  //相对于浏览器定位
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  margin: 0px;
  //遮罩颜色
  background-color: rgba(0, 0, 0, 0.5);

  //弹窗主体部分
  &-content {
    overflow-y:auto;
    overflow-x: hidden;
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;


    //标题部分
    &-title {
      //标题部分绝对定位到主体外面
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      box-sizing: border-box;
      border-top-left-radius:  5px;
      border-top-right-radius: 5px;

      //关闭按钮
      &-close {
        position: absolute;
        display: inline-block;
        right: 10px;
        top: 5px;
        font-size: 20px;
        cursor: pointer;
      }
    }

    //内容部分
    &-body {

      box-shadow: 5px 5px 3px rgba(0, 0, 0, 0.3);

    }
  }
}
</style>
