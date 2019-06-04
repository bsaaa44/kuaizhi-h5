<template>
  <div>
    <div class='page' v-if='info!=""'>
      <div class='header-block'>
        <div class='robot-contain'>
          <div class='info-block'>
            <img :src='info.topic.icon' class='avatar'/>
            <div class='middle'>
              <h1 class='title'>{{info.topic.name}}</h1>
              <p class='time'>{{info.created_at}}</p>  
            </div>  
            <button class='subscript-btn'>订阅</button>
          </div>  
          <card-item :item='info' :index='0' :showTimeBlock='false' :isDetailPage='true' class='card-item'/>
        </div> 
        <robot-info-block class='robot-info-block' :robots='info.fromRobots'/> 
      </div>  
      <div class='comment-block' v-if='info.commentsCount>0'>
        <div class='title-block'>
          评论{{info.commentsCount>0?"·"+info.commentsCount:""}}
        </div>
        <div class='divide-line'></div>
        <comment-item class='comment-item' v-for='(item,index) in list' :item='item' :key='index'/>
        <infinite-loading @infinite="onInfinite" ref="infiniteLoading" spinner="bubbles">
          <span slot="no-more"></span> 
          <span slot="no-results"></span>     
        </infinite-loading>
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
import CommentItem from "../components/CommentItem.vue"
import InfiniteLoading from 'vue-infinite-loading';
export default {
  data(){
    return{
      id: 0,
      info: '',
      list: [],
      currentPage: 1,
      showLoading: false
    }
  },
  components:{
    CardItem,
    RobotInfoBlock,
    CommentItem,
    Loading,
    InfiniteLoading
  },
  created(){
    this.id = this.$route.query.id
    this.showLoading = true
    this.$nextTick(()=>{
      this.getInfo()
      this.getList()
    })
  },
  methods: {
    onInfinite: function($state){
      this.getList().then((res)=>{
        if(res.data.list.length>0){
          $state.loaded();
        }else{
          $state.complete();
        }
      }).catch(()=>{
        $state.complete();
      })
    },
    getInfo: function(){
      let data = {
        card_id: this.id
      }
      this.$utils.axiosRequest('POST','feed/card/info','',data,res=>{
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
          page: this.currentPage,
          type: 0,
          target_id: this.id
        }
        this.$utils.axiosRequest('POST','comment/list','',data,res=>{
          if(this.list.length <= 0){
            this.list = res.data.list
          }else{
            this.list = this.list.concat(res.data.list)
          }
          if(res.data.list.length>0){
            ++this.currentPage 
          }
          resolve(res)
        },res=>{
          reject(res)
        })
      })
    }
  }
}
</script>

<style lang="stylus" scoped>
  .page{
    background #F7F7F7
  }
  .header-block{
    background: #fff;
    display flex;
    flex-flow column
    align-items center
    padding-top 0.15rem
    padding-bottom 0.16rem
  }
  .robot-contain{
    width 91.47%
    // width 3.43rem;
    background #fff;
    box-shadow: 0 0.02rem 0.1rem 0 rgba(218, 218, 218, 0.5)
    border-radius 0.1rem
  }
  .robot-contain .info-block{
    display flex;
    flex-flow row;
    align-items center;
    padding 0.12rem 0.12rem 0
    box-sizing border-box
  }
  .robot-contain .info-block .avatar{
    width 0.34rem
    height 0.34rem
    border-radius 0.03rem
    margin-right 0.08rem;
    flex-shrink 0
  }
  .robot-contain .info-block .middle{
    flex-grow: 1
  }
  .robot-contain .info-block .title{
    font-size: 14px
    line-height 20px
    color #333333
  }
  .robot-contain .info-block .time{
    font-size: 11px;
    line-height 15px;
    color #999
  }
  .robot-contain .info-block .subscript-btn{
    border 0
    width 0.6rem;
    height 0.28rem
    border-radius: 0.14rem
    background: #007AFF
    color #fff
  }
  .robot-contain .card-item{
    padding: 0 0.12rem
  }
  .robot-info-block{
    width 91.47%
    // width 3.43rem;
    height 0.56rem;
    background #fff;
    box-shadow 0 0.02rem 0.1rem 0 rgba(218, 218, 218, 0.5)
    margin-top 0.2rem
  }
  .comment-block{
    margin-top 0.08rem
    background #fff
  }
  .comment-block .title-block{
    padding 0 0.16rem
    box-sizing border-box
    height 0.44rem
    line-height 0.44rem
    font-size 15px;
    font-weight bold
    color #333
  }
  .comment-block .comment-item{
    margin-top 0.15rem
  }
</style>
