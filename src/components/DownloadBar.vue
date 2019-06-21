<template>
  <div>
    <!-- <div class="download-bar" :style="{top:top+'rem'}"> -->
    <div class="download-bar">
      <img src='../assets/logo.png' class='img-logo'/>
      <div class='info-block'>
        快知App<br>
        <span class='desc'>让信息获取更高效</span>
      </div>
      <button class='dl-btn' @click="handleShowPop">立即下载</button>
    </div>  
  </div>
</template>

<script>
export default {
  data(){
    return{
      top: 0,
      lastScroll: 0,
      showAnimate: false
    }
  },
  mounted(){
    // window.addEventListener('scroll', this.handleScroll)
  },
  methods:{
    handleShowPop: function(){
      this.$emit("handleShowPop")
    },
    handleScroll: function(){
      let scroll = document.documentElement.scrollTop || document.body.scrollTop
      if(scroll>this.lastScroll){
        this.top = -0.6
      }else{
        this.top = 0
      }
      this.lastScroll = scroll
    }
  }  
}
</script>


<style lang="stylus" scoped>
  .download-bar{
    // position fixed
    // left 0;
    position relative
    width 100%;
    height 0.6rem
    background #f2f2f2
    display flex;
    flex-flow row
    align-items center
    padding 0 0.15rem;
    box-sizing border-box
    z-index 2
    transition all 200ms linear
  }
  .download-bar .img-logo{
    width 0.4rem
    height 0.4rem
    border-radius 0.1rem
  }
  .download-bar .info-block{
    color #404040
    font-size 14px
    line-height 1.2
    font-weight 500
    padding-left 0.05rem
    flex-grow 1
  }
  .download-bar .info-block .desc {
    color grey
    font-size 12px
  }
  .download-bar .dl-btn{
    padding 0
    // width 0.6rem
    height 0.32rem
    border-radius 0.2rem
    background #f2f2f2
    color #007aff
    font-size 14px;
    display flex;
    flex-flow row 
    align-items center
    justify-content center
    border 0
  }
  
</style>
