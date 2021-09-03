import * as echarts from 'echarts';

let echartsTable = {};
/**
 * echarts指令封装
 * @cmd v-rxz-echarts
 * @arg 当前echarts实列的唯一标识（可选）
 * @value option，echarts选项
 * @modifiers
 * @author ruixiaozi
 * @version 1.0.11
 * @license MIT
 */
export default {
  name:'rxz-echarts',
  inserted(el,binding){
    //charts默认使用canvas绘图，大屏显示会造成模糊效果，4.0可更改成svg绘图
    let echart = echarts.init(el,null, {renderer: 'svg'});

    let option = binding.value;
    echart.showLoading();
    echart.setOption(option);
    echart.hideLoading();

    //参数为echarts的key
    let key = binding.arg;
    //如果没有，使用当前的时间
    if(!key){
      key = Date.now().toString();
    }
    el.dataset.echartKey = key;
    //保存echarts表
    echartsTable[key] = {
      instance: echart,
      resize(){
        this.instance.resize();
      }
    };
    window.addEventListener("resize",echartsTable[key].resize);

  },
  update(el,binding){
    //更新echarts
    let echartItem = echartsTable[el.dataset.echartKey];
    let echart = echartItem.instance;
    let option = binding.value;
    echart.showLoading();
    echart.setOption(option);
    echart.hideLoading();

  },
  unbind(el,binding){
    //销毁echarts以及事件
    let echartItem = echartsTable[el.dataset.echartKey];
    window.removeEventListener("resize",echartItem.resize);
    echartItem.instance.dispose();
    delete echartsTable[el.dataset.echartKey];
  }

}
