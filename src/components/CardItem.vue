<template>
  <div class="item-block" @click="navToDetail(item.id)">
    <div class="time-block" v-if="showTimeBlock" @click.stop>
      <span>{{item.created_at}}</span>
      <img src="../assets/more.png" class="img-more" @click="handleShowPop" />
    </div>
    <div class="card-title">{{item.title}}</div>
    <div :class="{'content-container':true,'hidden':!isDetailPage}">
      <div class="content" v-html="item.text.replace(/\n/g, '<br>')" ref="content"></div>
    </div>
    <button class="show-more" v-if="showMoreBtn&&!isDetailPage">全文</button>
    <div
      class="video-block"
      ref="videoBlock"
      v-if="item.video&&item.video!=''&&item.bilibili_video_id==0"
      @click.stop
    >
      <video
        :id="`player${index}`"
        class="video-js vjs-default-skin vjs-big-play-centered"
        :poster="item.video_thumb_img"
        preload="none"
      >
        <source :src="item.video" type="application/x-mpegURL" />
      </video>
    </div>
    <div v-if="item.bilibili_video_id!=0" class="iframe-block">
      <iframe
        :src="`//player.bilibili.com/player.html?aid=${item.bilibili_video_id}&page=1&cid=118131744`"
        scrolling="no"
        border="0"
        frameborder="no"
        framespacing="0"
        webkitallowfullscreen="true"
        mozallowfullscreen="true"
        allowfullscreen="true"
        class="video-iframe"
      ></iframe>
    </div>
    <div class="images-block" v-if="imagesArr.length>1&&item.video==''" @click.stop>
      <img
        v-lazy="it"
        v-for="(it,idx) in imagesArr"
        :key="idx"
        :onerror="imagePlaceholder"
        :large="it"
        :preview="index"
        :class="{
        'image-type-1':imagesArr.length!=2&&imagesArr.length!=1&&(idx>=imagesArr.length%3),
        'image-type-2':imagesArr.length%3==2&&idx<imagesArr.length%3,
        'image-type-3':imagesArr.length%3===1&&idx<imagesArr.length%3
        }"
        :style="{
          height: (imagesArr.length%3===1&&idx<imagesArr.length%3)?imageWidth/2+'px':'auto',
          marginBottom: imagesArr.length>3&&idx<imagesArr.length-3?'0.05rem':'0'  
        }"
      />
    </div>
    <div class="images-block" v-if="imagesArr.length==1&&item.video==''" @click.stop>
      <img
        v-lazy="imagesArr[0]"
        class="single-image"
        :onerror="imagePlaceholder"
        :large="imagesArr[0]"
        :preview="index"
      />
    </div>
    <a
      class="website-block"
      :href="item.url"
      v-if="showUrlBlock&&item.url&&item.url!=''"
      @click.stop
    >
      <img class="avatar" :src="item.url_cover|coverFilter" @error="onErrorHandler()" />
      <div class="info">
        <h3 class="title">{{item.url_title}}</h3>
        <p class="desc" v-if="item.url_desc!=''">{{item.url_desc}}</p>
      </div>
    </a>
    <div class="tools-block" :style="isDetailPage?'padding:0 0.08rem 0.13rem':''" @click.stop>
      <div class="zan-btn tools-btn" @click="handleShowPop">
        <img :src="item.emoji.top_emoji.emoji|emojiFilter" class="img-finger" />
        <span class="count" v-if="item.emoji.top_emoji.count>0">{{item.emoji.top_emoji.count}}</span>
      </div>
      <div class="comment-btn tools-btn" @click="handleShowPop">
        <img src="../assets/star.png" class="img-message" />
        <!-- <span class="count" v-if="item.commentsCount>0">{{item.commentsCount}}</span> -->
      </div>
      <div class="share-btn tools-btn" @click="handleShowPop">
        <img src="../assets/share.png" class="img-share" />
      </div>
    </div>
    <div class="divide-line" v-if="list&&index!=list.length-1&&list.length>0"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showMoreBtn: false,
      imagePlaceholder:
        'this.src="' + require("../assets/placeholder.png") + '"',
      imageWidth: 0,
      player: ""
    };
  },
  computed: {
    imagesArr: function() {
      return this.item.images.splice(0, 9);
    }
  },
  created() {
    this.imageWidth = document.body.clientWidth;
    let rxp = /<a-link href=["|'](.*?)["|']>(.*?)<\/a-link>/gi;
    this.item.text = this.item.text.replace(
      rxp,
      "<a href='$1' style='color:#4891E1'>$2</a>"
    );
  },
  mounted() {
    this.$nextTick(() => {
      console.log("this.cover", this.cover);
      if (this.player == "") {
        this.initPlayer();
      }
      // console.log()
      let contentHeight = this.$refs.content.offsetHeight;
      if (contentHeight >= 21 * 8 + 8) {
        this.showMoreBtn = true;
      }
      // let contentHeight =
    });
  },
  destroyed() {
    if (this.player != "") {
      this.player.dispose();
    }
  },
  methods: {
    stopVideo: function(index) {
      // if(this.index !== index){
      //   let id = `player${this.index}`
      //   this.$video(id).pause()
      // }
    },
    initPlayer: function() {
      let self = this;
      // console.log('test',this.$refs.videoBlock)
      if (this.item.video != "") {
        let dom = this.$refs.videoBlock;
        let width = dom.clientWidth;
        let height = dom.clientHeight;
        let id = `player${this.index}`;
        let player = videojs(
          id,
          {
            width,
            height,
            controls: true
          },
          function() {
            this.on("play", function() {
              // self.$emit("onVideoPlay",{index: self.index})
            });
          }
        );
        this.player = player;
      }
    },
    onErrorHandler: function() {
      let img = event.srcElement;
      if (this.cover != "") {
        img.src = this.cover;
      } else {
        img.src = require("../assets/placeholder.png");
      }
    },
    handleShowPop: function() {
      this.$emit("handleShowPop");
    },
    navToDetail: function(id) {
      this.$router.push({
        name: "cardDetail",
        params: {
          id
        }
      });
    }
  },
  filters: {
    coverFilter: function(value) {
      if (value.indexOf("cdnv2") >= 0) {
        return value + "/url_cover";
      } else {
        return value;
      }
    },
    emojiFilter: function(value) {
      return require(`../assets/emoji_${value}.png`);
    }
  },
  props: {
    showUrlBlock: {
      type: Boolean,
      default: true
    },
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
      default: ""
    }
  }
};
</script>

<style lang="stylus" scoped>
.video-js >>> .vjs-big-play-button {
  width: 1.5em !important;
  height: 1.5em !important;
  border-radius: 50% !important;
  margin-top: -1em !important;
  margin-left: -1em !important;
  border: 0 !important;
  line-height: 1.5em !important;
  font-size: 2em !important;
}

.card-title {
  font-size: 15px;
  color: #333;
  font-weight: bold;
  line-height: 21px;
  margin-top: 0.07rem;
}

.video-block {
  margin-top: 0.08rem;
  width: 100% !important;
  height: 1.79rem !important;
  border-radius: 0.04rem !important;
  overflow: hidden;
}

.iframe-block {
  width: 100% !important;
  margin-top: 0.08rem;
  height: 1.79rem;
  border-radius: 0.04rem;
  overflow: hidden;

  iframe {
    width: 100%;
    height: 100%;
    border-radius: 0.04rem;
    overflow: hidden;
  }
}

video {
  // object-fit: cover;
  // width 100% !important
  // height 1.79rem !important
  border-radius: 0.04rem !important;
}

.item-block {
  // margin-top 0.19rem
}

.item-block .time-block {
  display: flex;
  flex-flow: row;
  justify-content: space-between;
  align-items: center;
  font-size: 11px;
  line-height: 15px;
  color: #999;
}

.item-block .time-block .img-more {
  width: 0.2rem;
  height: 0.2rem;
}

.item-block .hidden {
  max-height: 180px;
  overflow: hidden;
}

.item-block .content-container {
  position: relative;
}

.show-more {
  font-size: 14px;
  line-height: 21px;
  color: #007AFF;
  padding: 0;
  border: 0;
  background: #fff;
}

.item-block .content {
  // white-space pre;
  // display: -webkit-box;
  // -webkit-box-orient: vertical;
  // -webkit-line-clamp: 8;
  // overflow: hidden;
  margin-top: 12px;
  font-size: 14px;
  line-height: 21px;
  color: #333;
  // word-break:normal;
  width: 100%;
  word-wrap: break-word;
}

.item-block .images-block {
  margin-top: 0.12rem;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
}

.item-block .images-block .image-type-1 {
  width: 1.03rem;
  height: 1.03rem !important;
  border-radius: 0.02rem;
  object-fit: cover;
}

.item-block .images-block .image-type-2 {
  width: 1.57rem !important;
  height: 1.57rem !important;
  border-radius: 0.02rem;
  object-fit: cover;
}

.item-block .images-block .image-type-3 {
  border-radius: 0.02rem;
  width: 100%;
  object-fit: cover;
}

.single-image {
  object-fit: cover;
  max-height: 2.16rem;
  max-width: 2.3rem;
  border-radius: 0.02rem;
}

// }
// .item-block .images-block .image-1{
// max-height: 2.16rem
// max-width: 2.3rem
// }
// .item-block .images-block .image-2{
// width 1.57rem !important
// height 1.57rem !important
// }
// .item-block .images-block .image-3{
// width 1.03rem
// height 1.03rem
// border-radius: 0.02rem
// }
// .item-block .images-block .image-4{
// width: 100%;
// height: 100%;
// // zoom: 40%
// background-size:cover;
// background-repeat: no-repeat;
// background-position center;
// }
.item-block .website-block {
  margin-top: 0.08rem;
  background: #F7F8FD;
  width: 100%;
  // height 0.92rem
  display: flex;
  flex-flow: row;
  align-items: center;
  padding: 0.08rem;
  box-sizing: border-box;
  border-radius: 0.04rem;
}

.item-block .website-block .avatar {
  // height: 100%;
  width: 0.66rem;
  height: 0.66rem;
  margin-right: 0.08rem;
  border-radius: 0.02rem;
  object-fit: cover;
  flex-shrink: 0;
}

.item-block .website-block .info {
  // width 2.29rem
  word-wrap: break-word;
  display: flex;
  flex-flow: column;
  justify-content: space-around;
  height: 0.66rem;
}

.item-block .website-block .title {
  // width 2.29rem
  word-wrap: break-word;
  font-size: 12px;
  color: #666;
  font-weight: bold;
  line-height: 15px;
  margin-bottom: 0.02rem;
  display: -webkit-box;
  word-break: break-all;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
}

.item-block .website-block .desc {
  width: 2.29rem;
  font-size: 12px;
  line-height: 15px;
  font-weight: 300;
  color: #666;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
  word-break: break-all;
}

.item-block .tools-block {
  margin-top: 0.13rem;
  display: flex;
  flex-flow: row;
  justify-content: space-between;
  align-items: center;
  padding: 0 0.05rem 0.13rem;
  box-sizing: border-box;
}

.item-block .tools-block .tools-btn {
  display: flex;
  flew-flow: row;
  align-items: center;
  appearance: none !important;
  -moz-appearance: none;
  -webkit-appearance: none;
}

.item-block .tools-block .img-finger {
  width: 0.22rem;
  height: 0.22rem;
  // margin-right: 0.08rem;
}

.item-block .tools-block .img-message {
  width: 0.22rem;
  height: 0.22rem;
  margin-right: 0.08rem;
}

.item-block .tools-block .img-share {
  width: 0.15rem;
  height: 0.15rem;
}

.item-block .tools-block .count {
  font-size: 13px;
  line-height: 19px;
  color: #999;
  margin-left: 0.05rem;
}
</style>
