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

    <rxz-center-layout>
      <div class="rxz-dialog-content"
        :style="[
          {'width':width}
        ]"
        >
        <div class="rxz-dialog-title"
          :style="[
            {height:titleHeight}
          ]">
          <span @click="isShow = false">
            <rxz-icon :style="[
              {color:closeColor}
            ]" v-show="isShowClose" name="close" class="rxz-dialog-close" />
          </span>


          <slot name="title"></slot>
        </div>
        <div class="rxz-dialog-body" >
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
    //是否显示
    visible: {
      type: Boolean,
      default: true,
    },
    //层级
    zIndex:{
      type: String,
      default: "3000"
    },
    //宽度（只对center有效）
    width: {
      type: String,
      default: "400px",
    },
    titleHeight: {
      type: String,
      default: "50px",
    },
    //是否显示关闭按钮
    isShowClose: {
      type: Boolean,
      default: true,
    },
    closeColor: {
      type: String,
      default: '#000000'
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
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  margin: 0px;
  background-color: rgba(0, 0, 0, 0.5);

  .rxz-dialog-content {
    position: relative;


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
        right: 10px;
        top: 5px;
        font-size: 20px;
        cursor: pointer;
        color: white;
      }
    }

    //内容部分
    .rxz-dialog-body {
      background-color: white;
      box-shadow: 5px 5px 3px rgba(0, 0, 0, 0.3);

    }
  }
}
</style>
