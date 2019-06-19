<template>
  <div class='owner-block' @click="handleShowPop"> 
    <div class='avatar-block'>
      <img :class='{"avatar-type-1":robots.length == 1,
                    "avatar-type-2":robots.length>1&&robots.length<5,
                    "avatar-type-3":robots.length>=5&&robots.length<10,
                    "avatar":true
      }' v-for='(item,index) in robots' :key='index' :src='item.icon'/>
    </div>
    <div class='desc-block'>
      <p class='label'>来自机器人</p>
      <p class='value'>
        <template v-for='(item,index) in robots'>
          <span :key='index'>【{{item.name}}】</span>
        </template>
      </p>
    </div>
    <img src='../assets/right-arrow.png' class='img-right-arrow'>
  </div>
</template>

<script>
export default {
  data(){
    return{

    }
  },
  methods:{
    handleShowPop: function(){
      this.$emit("handleShowPop")
    }
  },
  props:["robots"] 
}
</script>

<style lang="stylus" scoped>
  .owner-block{
    width 100%;
    height: 0.56rem
    border-radius 0.05rem
    background #F7F8FD;
    padding 0.08rem 0.12rem;
    box-sizing: border-box;
    display flex;
    flex-flow row;
    align-items center
  }
  .owner-block .avatar-block{
    display flex;
    flex-flow row wrap-reverse;
    justify-content center;
    align-content center
    align-items center
    width 0.4rem;
    height 0.4rem;
    border-radius: 0.02rem;
    margin-right: 0.08rem;
    background #fff;
    overflow hidden
    flex-shrink 0
  }
  .owner-block .avatar-block .avatar-type-1{
    width 100%
  }
  .owner-block .avatar-block .avatar-type-2{
    width 43%
  }
  .owner-block .avatar-block .avatar-type-3{
    width 27%
  }
  .owner-block .avatar-block .avatar{
    flex-shrink: 0;
    padding: 0.01rem;
    // background: #000
  }
  .owner-block .desc-block{
    width 2.38rem
  }
  .owner-block .desc-block .label{
    font-size: 12px;
    line-height 17px;
    color #999;
    margin-bottom 0.06rem
  }
  .owner-block .desc-block .value {
    width 100%;
    line-height 19px;
    color #666
    font-size: 13px;
    overflow: hidden;
    text-overflow:ellipsis;
    white-space: nowrap;
  }
  .owner-block .img-right-arrow {
    width 0.12rem
    height 0.12rem
    float right;
    flex-shrink 0
  }
</style>
