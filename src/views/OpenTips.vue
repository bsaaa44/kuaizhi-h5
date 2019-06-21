<template>
  <div>
    <img src='../assets/tips.png' class='img-tips' v-if='showOpenTips'>
  </div>
</template>

<script>
import { setTimeout } from 'timers';
export default {
  data(){
    return{
      showOpenTips: false
    }
  },
  created(){
    // location.reload()
    if(this.checkBrowser()=='wx'){
      this.showOpenTips = true
    }else if(this.checkBrowser()=='safari'){
      console.log('是safari浏览器尝试跳转')
      window.location.href=`kuaizhi://TopicListViewController?id="8EnYR9xbJbMve"`
      setTimeout(()=>{
        console.log('是safari浏览器尝试跳转失败，跳appstore')
        window.location.href = 'https://apps.apple.com/cn/app/%E7%A5%9E%E9%83%BD%E5%A4%9C%E8%A1%8C%E5%BD%95/id1420331309'
      },1000)
    }
  },
  methods:{
    checkBrowser: function(){
      console.log('进来了')
      let ua = navigator.userAgent.toLowerCase();
      let isChrome = ua.indexOf("chrome") != -1;
      let isSafari = ua.indexOf("safari") != -1;
      // let is360 = checkMime("type", "application/vnd.chromium.remoting-viewer");
      if (ua.match(/MicroMessenger/i) == "micromessenger") {
        return 'wx'
      }
      if(!isChrome && isSafari){
        return 'safari';
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
  .img-tips{
    width 100%
  }
</style>
