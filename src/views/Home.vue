<template>
  <div id='page'>  
    <join-pop @handleClosePop="handleClosePop" v-if='showJoinPop'/>
    <download-bar @handleShowPop= "handleShowPop"/>
    <div class="home" v-if='info!=""'>
      <div class='background-image-block'>
        <div class='bg' :style="'background-image: url('+info.icon+')'"></div>
      </div>
      <div id='main'>
        <div class='header-block'>
          <img class='avatar' :src='info.icon'/>
          <button class='subscript-btn' @click='handleShowPop'>订阅</button>
        </div>
        <div class='info-block'>
          <h1 class='title'>{{info.name}}</h1>
          <p class='desc'>{{info.description}}</p>
        </div>
        <robot-info-block :robots="info.robots" class='robot-info-block' @handleShowPop= "handleShowPop"/>
        <div class='owner-info-block'>
          <img class='avatar' v-lazy='info.owner.avatar'/>
          <span class='name'>{{info.owner.name}}</span>
          <span class='label'>创建</span>
        </div>
        <div class='divide-line'></div>
        <div class='topic-list'>
          <h2>主题动态</h2>
          <card-item class='card-item' v-for='(item,index) in list' :key='index' :id='index' :item='item' :list='list' :index='index' @handleShowPop= "handleShowPop"/>
          <!-- <infinite-loading @infinite="onInfinite" spinner="bubbles">  
            <span slot="no-more"></span> 
            <span slot="no-results"></span>     
          </infinite-loading> -->
        </div>
      </div>
      <div class='fill'></div>
      <button class='open-btn' @click='handleShowPop'>App 内打开</button>
    </div>
    
    <loading v-if='showLoading'></loading>
  </div>

</template>

<script>
import Loading from '../components/Loading'
import CardItem from "../components/CardItem.vue"
import DownloadBar from "../components/DownloadBar.vue"
import RobotInfoBlock from "../components/RobotInfoBlock.vue"
import InfiniteLoading from 'vue-infinite-loading';
import JoinPop from '../components/JoinPop.vue'

export default {
  data(){
    return{
      topicId: 0,
      imageWidth: 0,
      scrollLoading: false,
      showLoading: false,
      showJoinPop: false,
      info: '',
      currentPage: 1,
      list: [],
      loading: false
    }
  },
  components:{
    CardItem,
    Loading,
    DownloadBar,
    RobotInfoBlock,
    InfiniteLoading,
    JoinPop
  },
  created(){
    // this.$global.topicId = this.$route.query.id
    console.log('token',sessionStorage.getItem('token'))
    this.showLoading = true
    if(this.checkWxBrowser()){
      // sessionStorage.setItem("topicId",this.$route.query.id)
      this.$global.topicId = this.$route.query.id
      // this.$global.iosUrl = this.$global.hostUrl + this.$route.fullPath
      this.checkCode()
    }else{
      this.topicId = this.$route.query.id
      this.$nextTick(()=>{
        this.getDetail()
        this.getList()
      })
    }
  },
  methods:{
    checkCode: function(){
      if (this.$global.code.length != 0||this.$route.query.code) {
        this.$global.code = this.$route.query.code
        if(sessionStorage.getItem('token')){
          this.topicId =  this.$global.topicId
          console.log('登陆成功')
          this.$nextTick(()=>{
            this.getDetail()
            this.getList()
          })
        }else{
          let data = {
            code: this.$route.query.code
          }
          this.$utils.login(data).then(res=>{
            sessionStorage.setItem('token',res.data.token)
            // this.$global.hasLogin = true
            this.topicId = this.$global.topicId
            console.log('登陆成功')
            this.$nextTick(()=>{
              this.getDetail()
              this.getList()
            })
          })
        }
      }else{
        if(this.$global.code.length == 0){
          let url = window.location.href
          console.log('url',url)
          this.$utils.getCode(url)
          this.showLoading = false
        }
      }
    },
    handleShowPop: function(){
      let ua = navigator.userAgent;
      if(ua.indexOf('Android') > -1 || ua.indexOf('Adr') > -1){
        this.$toast('暂无Android版本');
      }else if(!!ua.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/)){
        this.$router.push({
          path: '/openTips',
          query: {
            page: 'TopicListViewController',
            id: this.topicId
          }
        })
        window.location = window.location
      }
      // this.showJoinPop = true
    },
    handleClosePop: function(){
      this.showJoinPop = false
    },
    onInfinite: function($state){
      this.getList().then((res)=>{
        if(res.data.list.length>0){
          $state.loaded();
        }else{
          $state.complete();
        }
      }).catch((res)=>{
        $state.complete();
      })
    },
    getDetail: function(){
      let data = {
        topic_id: this.topicId
      }
      this.$utils.axiosRequest('POST','api/topic/info','',data,res=>{
        this.info = res.data.info
        this.$nextTick(()=>{
          this.showLoading = false
        })
      },res=>{
        this.showLoading = false
      })
    },
    getList: function(){
      return new Promise((resolve,reject)=>{
        let data = {
          topic_id: this.topicId,
          page: this.currentPage
        }
        this.$utils.axiosRequest('POST','api/topic/cards','',data,res=>{
          if(res.data.list.length>0){
            if(res.data.list.length>5){
              res.data.list.splice(res.data.list.length-6,5)
            }
            if(this.list.length == 0){
              this.list = res.data.list
              ++this.currentPage
            }else{
              this.list = this.list.concat(res.data.list)
               ++this.currentPage
            }
          }
          resolve(res)
        },res=>{
          reject(res)
        })
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
  .fill{
    width 100%;
    height 10px;
  }
  #page {
    background #f7f7f7
  }
  .open-btn{
    z-index 2
    position fixed
    bottom 0.8rem
    left 50%;
    transform translateX(-50%)
    border 0
    // width 1rem
    height 0.32rem
    border-radius 0.16rem
    padding 0 0.13rem
    background #007aff
    color #fff;
    font-size 14px
    display flex;
    flex-flow row 
    align-items center
    justify-content center
    box-shadow: 0 0 4px 0 rgba(0,0,0,.12);
  }
  .background-image-block{
    z-index 1
    position absolute
    top 0;
    left 0;
    width 100vw
    height 2.44rem;
    overflow: hidden;
    // position relative
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
    background-size: cover;
    // background-attachment fixed
    background-repeat no-repeat;
    // background-size:100% 90%;
    
  }
  #main{
    position relative
    z-index 2
    // width 91.47%
    width 3.43rem;
    // width 343rem;
    background #fff;
    border-radius: 0.1rem;
    // position absolute;
    // top: 0.92rem;
    // left 50%
    // transform translateX(-50%);
    margin 0.92rem auto 0
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
    object-fit: cover
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
    margin-right 0.04rem;
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

