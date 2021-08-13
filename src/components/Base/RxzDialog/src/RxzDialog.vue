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
  <div class="rxz-dialog" v-show="isShow">

    <rxz-center-layout>
      <div class="rxz-dialog-title" :style="titleStyle">
        <i v-show="isShowClose" class="el-icon-close rxz-dialog-close" @click="isShow = false"></i>
        <slot name="title"></slot>
      </div>
      <div class="rxz-dialog-body" :style="bodyStyle">
        <slot name="body"></slot>
      </div>

    </rxz-center-layout>

  </div>
</template>

<script>
import RxzCenterLayout from "@/components/Layout/RxzCenterLayout";
export default {
  // Component name
  name: 'RxzDialog',
  // Component props
  props: {
    //是否显示
    visible: {
      type: Boolean,
      default: true,
    },
    //显示方式
    showType: {
      type: String,
      default: "center", // center fullscreen
    },
    //宽度（只对center有效）
    width: {
      type: String,
      default: "70%",
    },
    titleHeight: {
      type: String,
      default: "",
    },
    //是否显示关闭按钮
    isShowClose: {
      type: Boolean,
      default: true,
    },
  },
  // Locally registered components
  components: {
    RxzCenterLayout

  },
  // Component status
  data () {
    return {
      htmlOldStyle:"",
      bodyOldStyle:""
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
    showTypeRe() {
      switch (this.showType) {
        case "center":
          return "rxz-dialog-center";
        case "fullscreen":
          return "rxz-dialog-fullscreen";
        default:
          return "rxz-dialog-center";
      }
    },
    showStyle() {
      switch (this.showType) {
        case "center":
          let unit = this.width.match(/[^0-9]+/)[0];

          let marginLeft = -(parseInt(this.width) / 2);
          marginLeft = "" + marginLeft + unit;
          return {
            width: this.width,
            marginLeft: marginLeft,//<-width
          };
        case "fullscreen":
          return {};
        default:
          return {};
      }
    },
    titleStyle(){
      switch (this.showType) {
        case "center":

          return {
            height:this.titleHeight
          };
        case "fullscreen":
          return {};
        default:
          return {};
      }
    },
    bodyStyle(){
      switch (this.showType) {
        case "center":

          return {
            maxHeight: "calc(100% - "+this.titleHeight+")"
          };
        case "fullscreen":
          return {};
        default:
          return {};
      }
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
.rxz-dialog {
  position: fixed;
  z-index: 2902;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  margin: 0px;
  background-color: rgba(0, 0, 0, 0.5);

  .rxz-dialog-content {
    position: relative;


    //居中弹窗
    &.rxz-dialog-center {
      left: 50%;
      top: 10%;
      height: 80%;
      width: 70%;
      margin-left: -35%;


    }

    //全屏弹窗
    &.rxz-dialog-fullscreen {
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;

      //内容部分
      .rxz-dialog-body{
        flex: 1;
      }

    }

    //标题部分
    .rxz-dialog-title {
      position: relative;
      width: 100%;
      background-color: white;
      box-shadow: 5px -3px 3px rgba(0, 0, 0, 0.3);

      //关闭按钮
      .rxz-dialog-close {
        position: absolute;
        display: inline-block;
        right: 20px;
        top: 15px;
        font-size: 20px;
        cursor: pointer;
        color: white;
      }
    }

    //内容部分
    .rxz-dialog-body {
      background-color: white;
      overflow-y:auto;
      overflow-x: hidden;
      box-shadow: 5px 5px 3px rgba(0, 0, 0, 0.3);
      //滚动条样式
      & {
        &::-webkit-scrollbar {
          width: 3px; /*滚动条宽度*/
          height: 3px; /*滚动条高度*/
        }

        /*定义滚动条轨道 内阴影+圆角*/
        &::-webkit-scrollbar-track {
          -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
          border-radius: 10px; /*滚动条的背景区域的圆角*/
          background-color: white; /*滚动条的背景颜色*/
        }

        /*定义滑块 内阴影+圆角*/
        &::-webkit-scrollbar-thumb {
          border-radius: 10px; /*滚动条的圆角*/
          -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
          background-color: lightgray; /*滚动条的背景颜色*/
        }
      }
    }
  }
}
</style>
