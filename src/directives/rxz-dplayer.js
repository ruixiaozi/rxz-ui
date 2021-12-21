import DPlayer from 'dplayer'
import flvjs from 'flv.js'
import hlsjs from 'hls.js'

import utils from '@/utils'

let dplayerTable = {};

/**
 * dplayer指令封装
 * @cmd v-rxz-dplayer
 * @arg 当前dplayer实列的唯一标识（可选）
 * @value src 视频地址
 * @modifiers isLive,isAutoPlay
 * @author ruixiaozi
 * @version 1.0.20
 * @license MIT
 */
export default {
  name:'rxz-dplayer',
  inserted(el,binding){
    if(window){
      window.flvjs = flvjs;
      window.Hls = hlsjs;
    }


    let modifiers = binding.modifiers;


    let dp = new DPlayer({
      container: el,
      autoplay: modifiers.isAutoPlay,
      live: modifiers.isLive,
      video: {
          url: binding.value,
          type: 'auto',
      },
      mutex:false, //是否阻止多个播放器同时播放
      volume:0
  });


    //参数为dplayer的key
    let key = binding.arg;
    //如果没有，使用当前的时间
    if(!key){
      key = Date.now().toString();
    }

    el.dataset.dplayerKey = key;

    //保存dplayer表
    dplayerTable[key] = {
      instance: dp,
      debounceSwitchUrl:utils._.debounce(this.switchUrl,200),
      switchUrl(dp,url){
        dp.switchVideo(
          {url: url}
        );

        var timer = setInterval(() => {
          if(dp.video.paused){
            dp.play();
          }
          else if(timer){
            clearInterval(timer);
            timer = null
          }
        }, 200);

      },

    };


  },
  update(el,binding){
    //更新地址
    let dplayerItem = dplayerTable[el.dataset.dplayerKey];
    let dp = dplayerItem.instance;
    let url = binding.value;
    dplayerItem.debounceSwitchUrl(dp,url);

  },
  unbind(el,binding){
    //销毁dplayer
    let dplayerItem = dplayerTable[el.dataset.dplayerKey];
    let dp = dplayerItem.instance;
    dp.destroy();
    delete dplayerTable[el.dataset.dplayerKey];
  },


}
