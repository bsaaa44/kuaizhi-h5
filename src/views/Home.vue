<template>
  <div>  
    <download-bar/>
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
          <img class='avatar' v-lazy='info.owner.avatar'/>
          <span class='name'>{{info.owner.name}}</span>
          <span class='label'>创建</span>
        </div>
        <div class='divide-line'></div>
        <div class='topic-list'>
          <h2>主题动态</h2>
          <card-item class='card-item' v-for='(item,index) in list' :key='index' :item='item' :list='list' :index='index'/>
          <!-- <infinite-loading @infinite="onInfinite" spinner="bubbles">  
            <span slot="no-more"></span> 
            <span slot="no-results"></span>     
          </infinite-loading> -->
        </div>
      </div>
      <button class='open-btn'>App 内打开</button>
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

export default {
  data(){
    return{
      topicId: 0,
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
    DownloadBar,
    RobotInfoBlock,
    InfiniteLoading
  },
  created(){

    if(this.checkWxBrowser()){

    }
    this.topicId = this.$route.query.id
    this.showLoading = true
    this.$nextTick(()=>{
      this.getDetail()
      this.getList()
    })
  },
  methods:{
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
      return new Promise((resolve,reject)=>{
        let data = {
          topic_id: this.topicId,
          page: this.currentPage
        }
        this.$utils.axiosRequest('POST','topic/cards','',data,res=>{
          // let rxp = /<a-link href="(.*?)">(.*?)<\/a-link>/gi
          // for(let i of res.data.list){
          //   i.text = i.text.replace(rxp,"<a href='$1' style='color:#4891E1'>$2</a>")
          // }
          if(res.data.list.length>0){
            res.data.list.splice(0,5)
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
  .open-btn{
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
    background-size: cover;
    // background-attachment fixed
    background-repeat no-repeat;
    // background-size:100% 90%;
    
  }
  #main{
    // width 91.47%
    width 3.43rem;
    // width 343rem;
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

