<template>
  <div class="home" v-if='info!=""'>
    <div class='background-image-block'>
      <div class='bg' :style="'background-image: url('+info.icon+')'"></div>
    </div>
    <div id='main'>
      <div class='header-block'>
        <img class='avatar' :src='info.icon'/>
        <button class='subscript-btn'>订阅</button>
      </div>
      <div class='info-block'>
        <h1 class='title'>{{info.name}}</h1>
        <p class='desc'>{{info.description}}</p>
      </div>
      <robot-info-block :robots="info.robots" class='robot-info-block'/>
      <div class='owner-info-block'>
        <img class='avatar' :src='info.owner.avatar'/>
        <span class='name'>{{info.owner.name}}</span>
        <span class='label'>创建</span>
      </div>
      <div class='divide-line'></div>
      <div class='topic-list'>
        <h2>主题动态</h2>
        <card-item class='card-item' v-for='(item,index) in list' :key='index' :item='item' :list='list' :index='index'/>
      </div>
    </div>
    <loading v-if='showLoading'></loading>
  </div>
</template>

<script>
import $ from "jquery";
import Loading from '../components/Loading'
import CardItem from "../components/CardItem.vue"
import RobotInfoBlock from "../components/RobotInfoBlock.vue"

export default {
  data(){
    return{
      imageWidth: 0,
      scrollLoading: false,
      showLoading: false,
      info: '',
      currentPage: 1,
      list: [],
      loading: false
    }
  },
  components:{
    CardItem,
    Loading,
    RobotInfoBlock
  },
  created(){
    if(this.checkWxBrowser()){

    }
    console.log()
    this.showLoading = true
    this.scrollToLoad()
    this.getDetail()
    this.getList()
  },
  beforeDestroy(){
    this.removeScroll()
  },
  methods:{
    removeScroll: function(){
      $(window).unbind("scroll",this.scrollToLoad())
    },
    scrollToLoad: function(){
      let self = this
      $(window).scroll(function () {
        let scrollTop = $(this).scrollTop()
        let scrollHeight = $(document).height()
        let windowHeight = $(this).height()
        if (scrollTop + windowHeight === scrollHeight&&!this.loading) {
          console.log('进来了')
          self.getList()
        }
      })
    },
    getDetail: function(){
      let data = {
        topic_id: 'Nwl74MOXJKZA1'
      }
      this.$utils.axiosRequest('POST','topic/info','',data,res=>{
        this.info = res.data.info
        this.$nextTick(()=>{
          this.showLoading = false
        })
      },res=>{
        this.showLoading = false
      })
    },
    getList: function(){
      this.loading = true
      let data = {
        topic_id: 'Nwl74MOXJKZA1',
        page: this.currentPage
      }
      this.$utils.axiosRequest('POST','topic/cards','',data,res=>{
        if(res.data.list.length>0){
          if(this.list.length == 0){
            this.list = res.data.list
            ++this.currentPage
          }else{
            this.list = this.list.concat(res.data.list)
             ++this.currentPage
          }
        }
        this.loading = false
        // this.info = res.data.info
      },res=>{
        this.loading = false
      })
    },
    checkWxBrowser: function(){
      let ua = navigator.userAgent.toLowerCase();
      if (ua.match(/MicroMessenger/i) == "micromessenger") {
        return true
      }else{
        return false
      }
    }
  }
};
</script>

<style lang="stylus" scoped>
  .background-image-block{
    width 100vw
    height 2.44rem;
    overflow: hidden;
    position relative
  }
  .background-image-block .bg{
    position absolute
    top 50%;
    left 50%;
    transform translate(-50%,-50%)
    filter: blur(7px)
    width 120%;
    height 120%
    background-position center;
    // background-attachment fixed
    background-repeat no-repeat;
    // background-size:100% 90%;
    
  }
  #main{
    // width 3.43rem;
    // width 375px;
    background #fff;
    border-radius: 0.1rem;
    position absolute;
    top: 0.92rem;
    left 50%
    transform translateX(-50%);
    padding 0 0.12rem
    box-sizing border-box
  }
  #main .header-block{
    position relative
  }
  #main .header-block .subscript-btn{
    display flex;
    flex-flow row;
    justify-content center;
    align-items: center;
    width 0.6rem
    height 0.28rem
    border-radius 0.14rem
    background #007AFF
    color #fff;
    font-size 12px
    // font-weight bold
    float right
    margin-top 0.12rem
    border 0
  }
  #main .header-block .avatar{
    width 0.6rem
    height 0.6rem
    border-radius 0.03rem
    margin-top -0.16rem
  }
  #main .info-block{
    margin-top 0.16rem
  }
  #main .info-block .title{
    font-size: 16px;
    color #333;
    line-height 23px;
    font-weight: bold
  }
  #main .info-block .desc{
    font-size: 13px;
    line-height 19px;
    color #666;
    margin-top 0.08rem
  }
  #main .robot-info-block{
    margin-top 0.16rem;
  }
  #main .owner-info-block{
    display flex;
    flex-flow row;
    justify-content flex-end;
    align-items center;
    margin-top 0.12rem
    font-size: 12px;
    line-height 21px;
  }
  #main .owner-info-block .avatar{
    width 0.2rem;
    height 0.2rem;
    border-radius 50%;
    margin-right 0.04rem
  }
  #main .owner-info-block .name{
    color #333;
    margin-right 0.04rem
  }
  #main .owner-info-block .label{
    color #999
  }
  .divide-line{
    margin-top: 0.12rem;
  }
  .topic-list{
    padding-top 0.16rem
  }
  .topic-list h2{
    font-size: 15px;
    line-height 21px;
    color: #333;
    font-weight: bold;
  }
  .topic-list .card-item{
    margin-top 0.19rem
  }
</style>

