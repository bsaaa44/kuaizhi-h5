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
      window.location.href=`kuaizhi://TopicListViewController?id="8EnYR9xbJbMve"`
      setTimeout(()=>{
        if(this.checkBrowser()=='safari'){
          window.location.href = 'https://apps.apple.com/cn/app/%E7%A5%9E%E9%83%BD%E5%A4%9C%E8%A1%8C%E5%BD%95/id1420331309'
        }
      },1000)
    }
  },
  methods:{
    checkBrowser: function(){
      console.log('进来了')
      let ua = navigator.userAgent.toLowerCase();
      if (ua.match(/MicroMessenger/i) == "micromessenger") {
        return 'wx'
      }else if(ua.indexOf('Safari')>-1){
        return 'safari'
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
