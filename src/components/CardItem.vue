<template>
  <div class='item-block' @click='navToDetail(item.id)'>
    <div class='time-block' v-if='showTimeBlock' @click.stop>
      <span>{{item.created_at}}</span>
      <img src='../assets/more.png' class='img-more' @click="handleShowPop"/>
    </div>
    <div class='card-title'>{{item.title}}</div>
    <div class='content' v-html="item.text.replace(/\n/g, '<br>')"></div>
    <div class='video-block' ref='videoBlock' v-if='item.video&&item.video!=""' @click.stop>
      <video :id="`player${index}`" class="video-js vjs-default-skin vjs-big-play-centered" :poster="item.video_thumb_img" preload="auto">
        <source :src="item.video" type="application/x-mpegURL">
      </video>
    </div>
    <div class='images-block' v-if='imagesArr.length>1&&item.video==""' @click.stop>
      <img v-lazy="it" v-for="(it,idx) in imagesArr" :key="idx" :onerror="imagePlaceholder" @click='handlePreviewImage(imagesArr,idx)'
       :class="{
        'image-type-1':imagesArr.length!=2&&imagesArr.length!=1&&(idx>=imagesArr.length%3),
        'image-type-2':imagesArr.length%3==2&&idx<imagesArr.length%3,
        'image-type-3':imagesArr.length%3===1&&idx<imagesArr.length%3
        }" :style="{
          height: (imagesArr.length%3===1&&idx<imagesArr.length%3)?imageWidth/2+'px':'auto',
          marginBottom: imagesArr.length>3&&idx<imagesArr.length-3?'0.05rem':'0'  
        }"
        />
    </div>
    <div class='images-block' v-if='imagesArr.length==1&&item.video==""' @click.stop>
      <img v-lazy="imagesArr[0]" class='single-image' :onerror="imagePlaceholder" @click='handlePreviewImage(imagesArr,0)'>
    </div>
    <a class='website-block' :href='item.url' v-if='item.url&&item.url!=""' @click.stop>
      <img class='avatar' :src='item.url_cover' @error="onErrorHandler()"/>
      <div class='info'>
        <h3 class='title'>{{item.url_title}}</h3>
        <p class='desc' v-if='item.url_desc!=""'>{{item.url_desc}}</p>
      </div>
    </a>
    <div class='tools-block' :style="isDetailPage?'padding:0 0.08rem 0.13rem':''" @click.stop>
      <div class='zan-btn tools-btn' @click="handleShowPop">
        <img src='../assets/finger.png' class='img-finger'/>
        <span class='count' v-if='item.zanCount>0'>{{item.zanCount}}</span>
      </div>
      <div class='comment-btn tools-btn' @click="handleShowPop">
        <img src='../assets/message.png' class='img-message'/>
        <span class='count' v-if='item.commentsCount>0'>{{item.commentsCount}}</span>
      </div>
      <div class='share-btn tools-btn' @click="handleShowPop">
        <img src='../assets/share.png' class='img-share'/>
      </div>
    </div>
    <div class='divide-line' v-if='list&&index!=list.length-1&&list.length>0'></div>
  </div>
</template>

<script>
import { ImagePreview } from 'vant';
import { constants } from 'crypto';

export default {
  data(){
    return{
      imagePlaceholder: 'this.src="'+require('../assets/placeholder.png')+'"',
      imageWidth: 0,
      player: ''
    }
  },
  computed: {
    imagesArr: function(){
      return this.item.images.splice(0,9)
    }
  },
  created(){
    this.imageWidth = document.body.clientWidth
    console.log(this.imageWidth)
    let rxp = /<a-link href="(.*?)">(.*?)<\/a-link>/gi
    this.item.text = this.item.text.replace(rxp,"<a href='$1' style='color:#4891E1'>$2</a>")
  },
  mounted(){
    this.$nextTick(()=>{
      console.log('this.player',this.player)
      if(this.player == ""){
        console.log('进来了')
        this.initPlayer()
      }
    })
  },
  destroyed(){
    console.log('离开页面触发')
    console.log('this.player',this.player)
    if(this.player!=""){
      this.player.dispose()
    }
  },
  methods:{
    stopVideo: function(index){
      // if(this.index !== index){
      //   let id = `player${this.index}`
      //   this.$video(id).pause()
      // }
    },
    initPlayer:function(){
      let self = this
      // console.log('test',this.$refs.videoBlock)
      if(this.item.video!=""){
        let dom = this.$refs.videoBlock
        let width = dom.clientWidth
        let height= dom.clientHeight
        let id = `player${this.index}`
        let player = this.$video(id,{
          width,
          height,
          controls: true
        },function(){
          this.on("play",function(){
            // self.$emit("onVideoPlay",{index: self.index})
          })
        })
        console.log('player',player)
        this.player = player
        console.log('this.player',this.player)
      }
    },
    onErrorHandler: function(){
      let img = event.srcElement;
      console.log('img',img)
      img.src= this.cover
    },
    handlePreviewImage: function(itemArr,index){
      ImagePreview({
        images: itemArr,
        startPosition:index
      })
    },
    handleShowPop: function(){
      this.$emit("handleShowPop")
    },
    navToDetail: function(id){
      this.$router.push({
        name: 'cardDetail',
        query:{
          id
        }
      })
    }
  },
  filters:{
  
  },
  props:{
    id: {
      type: Number,
      default: 1
    },
    item: Object,
    index: Number,
    list: Array,
    showTimeBlock: {
      type: Boolean,
      default: true
    },
    isDetailPage: {
      type: Boolean,
      default: false
    },
    cover: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="stylus" scoped>
  .card-title{
    font-size 15px;
    color #333;
    font-weight bold
    line-height 21px
    margin-top 0.07rem
  }
  .video-block{
    margin-top 0.08rem
    width 100% !important
    height 1.79rem !important
    border-radius 0.04rem !important
    overflow hidden
  }
  video{
    object-fit cover
    // width 100% !important
    // height 1.79rem !important
    border-radius 0.04rem !important
  }
  .item-block{
    // margin-top 0.19rem
  }
  .item-block .time-block{
    display flex;
    flex-flow row;
    justify-content space-between;
    align-items center
    font-size 11px;
    line-height 15px;
    color #999
  }
  .item-block .time-block .img-more{
    width 0.2rem;
    height 0.2rem
  }
  .item-block .content{
    // white-space pre;
    margin-top 0.12rem
    font-size 14px;
    line-height 21px;
    color #333;
    // word-break:normal;
    width 100%;
    word-wrap break-word
  }
  .item-block .images-block{
    margin-top 0.12rem;
    display flex;
    flex-flow: row wrap;
    justify-content space-between;
  }
  .item-block .images-block .image-type-1{
    width 1.03rem;
    height 1.03rem !important;
    border-radius: 0.02rem;
    object-fit: cover
  }
  .item-block .images-block .image-type-2{
    width 1.57rem !important
    height 1.57rem !important
    border-radius: 0.02rem;
    object-fit: cover
  }
  .item-block .images-block .image-type-3{
    border-radius: 0.02rem;
    width 100%;
    object-fit: cover
  }
  .single-image{
    object-fit: cover
    max-height: 2.16rem
    max-width: 2.3rem
    border-radius: 0.02rem;
  }
  // .item-block .images-block .image-item{
    // display: flex;
    // flex-flow row;
    // align-items center;
    // justify-content center;
    // overflow hidden;
    // flex-grow: 1
  // }
  // .item-block .images-block .image-1{
  //   max-height: 2.16rem
  //   max-width: 2.3rem
  // }
  // .item-block .images-block .image-2{
  //   width 1.57rem !important
  //   height 1.57rem !important
  // }
  // .item-block .images-block .image-3{
  //   width 1.03rem
  //   height 1.03rem
  //   border-radius: 0.02rem
  // }
  // .item-block .images-block .image-4{
  //   width: 100%;
  //   height: 100%;
  //   // zoom: 40%
  //   background-size:cover;
  //   background-repeat: no-repeat;
  //   background-position center;
  // }
  .item-block .website-block{
    margin-top 0.08rem
    background: #F7F8FD;
    width 100%;
    // height 0.92rem
    display flex;
    flex-flow: row;
    align-items: center;
    padding 0.08rem;
    box-sizing:border-box;
    border-radius 0.04rem
  }
  .item-block .website-block .avatar{
    // height: 100%;
    width 0.66rem
    height 0.66rem 
    margin-right: 0.08rem
    border-radius: 0.02rem
    object-fit: cover
    flex-shrink 0
  }
  .item-block .website-block .info{
    // width 2.29rem
    word-wrap break-word
    display flex;
    flex-flow column;
    justify-content space-around;
    height: 0.66rem
  }
  .item-block .website-block .title{
    // width 2.29rem
    word-wrap break-word
    font-size: 12px;
    color:#666;
    font-weight: bold;
    line-height 15px;
    margin-bottom 0.02rem
    display: -webkit-box;
    word-break break-all
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    overflow: hidden;
  }
  .item-block .website-block .desc{
    width 2.29rem
    font-size: 12px;
    line-height 15px;
    font-weight 300
    color #666;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    overflow: hidden;
    word-break break-all
  }
  .item-block .tools-block{
    margin-top 0.13rem
    display flex;
    flex-flow row;
    justify-content space-between;
    align-items center
    padding-bottom 0.13rem
    box-sizing border-box
  }
  .item-block .tools-block .tools-btn{
    display flex;
    flew-flow row
    align-items center
    appearance: none !important;
    -moz-appearance: none;
    -webkit-appearance: none;
  }
  .item-block .tools-block .img-finger{
    width 0.16rem
    height 0.16rem
    margin-right 0.08rem
  }
  .item-block .tools-block .img-message{
    width 0.16rem
    height 0.16rem
    margin-right 0.08rem
  }
  .item-block .tools-block .img-share{
    width 0.15rem
    height 0.15rem
  }
  .item-block .tools-block .count {
    font-size 13px;
    line-height 19px;
    color #999
  }
</style>
