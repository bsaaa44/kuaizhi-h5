<template>
  <div class='item-block' @click='navToDetail(item.id)'>
    <div class='time-block' v-if='showTimeBlock'>
      <span>{{item.created_at}}</span>
      <img src='../assets/more.png' class='img-more'/>
    </div>
    <div class='content' v-html="item.text.replace(/\n/g, '<br>')"></div>
    <!-- <div class='images-block' v-if='item.images.length>0'>
      <div :class='{
                    "image-item": true,
                    "image-2":item.images.length==2,
                    "image-3":item.images.length==3}'
      v-for='(it,idx) in item.images' :key='idx'>
        <img :src='it' :class='{"image-1":true}'/>
      </div> -->
    <div class='video-block' v-if='item.video&&item.video!=""' @click.stop>
      <video controls="controls" :poster="item.video_thumb_img"
      x-webkit-airplay="true" x5-video-player-fullscreen="true"
      playsinline="true" webkit-playsinline
      x5-video-player-typ="h5">
        <source type="application/x-mpegURL" :src="item.video">
      </video>
    </div>
    <div class='images-block' v-if='item.images.length>1' @click.stop>
      <img v-lazy="it" v-for="(it,idx) in item.images" :key="idx" :class="{
        'image-type-1':item.images.length!=2&&item.images.length!=1&&(idx>=item.images.length%3),
        'image-type-2':item.images.length%3==2&&idx<item.images.length%3,
        'image-type-3':item.images.length%3===1&&idx<item.images.length%3
        }" :style="{
          height: (item.images.length%3===1&&idx<item.images.length%3)?imageWidth/2+'px':'auto',
          marginBottom: item.images.length>3&&idx<item.images.length-3?'0.05rem':'0'  
        }"
        />
      <!-- <template  v-for='(it,idx) in item.images' > -->
        <!-- <template v-if='item.images.length>1'>
          <div :class='{
            "image-item": true,
            "image-2":item.images.length==2||((item.images.length==8||item.images.length==5)&&idx>item.images.length-3),
            "image-3":item.images.length>=3}'
            :style='{
              marginBottom: item.images.length>3&&idx>2?"0.05rem":"0",
              flexGrow: (item.images.length==4||item.images.length==7)&&idx==item.images.length-1?1:0,
              height:(item.images.length==2)||(item.images.length>3&&item.images.length<6&&idx>item.images.length-2)||(item.images.length>6&&item.images.length<9&&idx>item.images.length-2)?imageWidth/2+"px":item.images.length==1?"auto":"1.03rem"
            }'
          :key='idx' @click.stop>
            <div 
            :style="it | backgroundAddThumb"
            :class='{
              "image-4":item.images.length>1}
            '>
            </div>
          </div>
        </template>
        <template v-if="item.images.length==1">
          <div class='image-item' :key='idx'>
            <img :src='it | addThumb' class='image-1' />
          </div>
        </template> -->
      <!-- </template> -->
    </div>
    <div class='images-block' v-if='item.images.length==1' @click.stop>
      <img v-lazy="item.images[0]" class='single-image'>
    </div>
    <a class='website-block' :href='item.url' @click.stop>
      <img class='avatar' :src='item.url_cover'/>
      <div class='info'>
        <h3 class='title'>{{item.url_title}}</h3>
        <p class='desc' v-if='item.url_desc!=""'>{{item.url_desc}}</p>
      </div>
    </a>
    <div class='tools-block' :style="isDetailPage?'padding:0 0.08rem':''" @click.stop>
      <div class='zan-btn tools-btn'>
        <img src='../assets/finger.png' class='img-finger'/>
        <span class='count' v-if='item.zanCount>0'>{{item.zanCount}}</span>
      </div>
      <div class='comment-btn tools-btn'>
        <img src='../assets/message.png' class='img-message'/>
        <span class='count' v-if='item.commentsCount>0'>{{item.commentsCount}}</span>
      </div>
      <div class='share-btn tools-btn'>
        <img src='../assets/share.png' class='img-share'/>
      </div>
    </div>
    <div class='divide-line' v-if='list&&index!=list.length-1&&list.length>0'></div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      imageWidth: 0
    }
  },
  created(){
    this.imageWidth = document.body.clientWidth
    console.log(this.imageWidth)
    let rxp = /<a-link href="(.*?)">(.*?)<\/a-link>/gi
    this.item.text = this.item.text.replace(rxp,"<a href='$1' style='color:#4891E1'>$2</a>")
  },
  methods:{
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
    backgroundAddThumb: function(value){
      if(value.indexOf('cdn.sync163.com')>=0){
        return 'background-image: url('+value+'/thumb)'
      }else{
        return 'background-image: url('+value+')'
      }
    },
    addThumb: function(value){
      if(value.indexOf('cdn.sync163.com')>=0){
        return value+'/thumb'
      }else{
        return value
      }
    }
  },
  props:{
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
    }
  }
}
</script>

<style lang="stylus" scoped>
  video{
    width 100%
    height 1.48rem
    border-radius 0.04rem
    margin-top 0.08rem
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
    margin-top 0.15rem
    font-size 14px;
    line-height 21px;
    color #333;
    // word-break:break-all;
    width 100%;
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
    display flex;
    flex-flow column;
    justify-content space-around;
    height: 0.66rem
  }
  .item-block .website-block .title{
    font-size: 13px;
    color:#666;
    font-weight: bold;
    line-height 19px;
    margin-bottom 0.02rem
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    overflow: hidden;
  }
  .item-block .website-block .desc{
    font-size: 12px;
    line-height 17px;
    color #666;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    overflow: hidden;
  }
  .item-block .tools-block{
    margin-top 0.13rem
    display flex;
    flex-flow row;
    justify-content space-between;
    align-items center
    margin-bottom 0.13rem
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
    width 0.16rem
    height 0.16rem
  }
  .item-block .tools-block .count {
    font-size 13px;
    line-height 19px;
    color #999
  }
</style>
