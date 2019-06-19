<template>
  <div>
    <div class='cover' @click.stop="handleClosePop"></div>
    <div class='main-block' @click.stop>  
      <img src='../assets/logo.png' class='img-logo'/>
      <p class='desc-text'>
        上快知，一站式订阅信息<br>
        定向提醒快人所知
      </p>
      <a class='j-button'>开启快知</a>
    </div>  
  </div>
</template>

<script>
export default {
  data(){
    return{}
  },
  methods:{
    handleClosePop: function(){
      this.$emit("handleClosePop")
    }
  }  
}
</script>


<style lang="stylus" scoped>
  .cover{
    width 100vw
    height 100vh
    position fixed
    top 0
    left 0 
    background rgba(0,0,0,0.5)
    z-index 999
  }
  .main-block{
    position fixed
    top 50%;
    left 50%;
    transform translate(-50%,-50%)
    z-index 1000
    width 2.6rem
    border-radius 0.06rem
    display flex;
    flex-flow column
    align-items center
    background #fff
  }
  .main-block .img-logo{
    width 0.5rem
    height 0.5rem
    border-radius 0.1rem
    margin-top -0.18rem
  }
  .main-block .desc-text{
    margin-top 0.16rem
    font-size 14px
    line-height 1.6
    text-align center
    color #404040
  }
  .main-block .j-button{
    width 85%;
    margin 0.16rem
    background #007aff
    color #fff
    border-radius 0.04rem
    text-align center
    font-size 14px
    line-height 1
    padding 0.09rem 0
  }
</style>
