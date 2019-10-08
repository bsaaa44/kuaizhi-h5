<template>
  <div class="card-item" v-if="item.sender_avatar">
    <img class="avatar" :src="item.sender_avatar" />
    <div class="right-container">
      <div class="info-block">
        <p class="name">{{item.sender_name}}</p>
        <p class="time">{{item.created_at}}</p>
        <button class="zan-button" @click="handleShowPop">
          <img class="img-zan" src="../assets/finger.png" />
          <span class="count">{{item.like_count}}</span>
        </button>
      </div>
      <div class="content-block">{{item.content}}</div>
      <!-- <img v-if="item.image&&item.image!=''" :src="item.image" class="content-image" preview="1" /> -->
      <img v-if="item.image&&item.image!=''" :src="item.image"/>
      <div class="reply-block" v-if="item.comments&&item.comments.length>0">
        <template v-for="(itm,idx) in item.comments">
          <p class="reply-item" :key="itm.id">
            <span class="name">{{itm.sender_name}}</span>
            <!-- <span class="reply" v-if="!itm.replyer_name">:</span> -->
            <span class="reply" v-if="itm.replyer_name">
              回复
              <span class="name">{{itm.replyer_name}}</span> :
            </span>
            <span class="content-text">{{itm.content}}</span>
            <template v-if="itm.image!=''">
              <img src="../assets/blue-pic.png" class="img-pic" @click="handleShowPop" />
              <span class="show-pic-text" @click="handleShowPop">查看图片</span>
            </template>
          </p>
          <div class="fill-block" :key="idx" v-if="item.comments&&idx!=item.comments.length-1"></div>
        </template>
        <p class="show-more" v-if="item.comment_count>2" @click="handleShowPop">查看所有评论</p>
      </div>
      <div class="divide-line"></div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    handleShowPop: function() {
      this.$emit("handleShowPop");
    }
  },
  props: {
    item: {
      type: Object,
      default: {}
    }
  }
};
</script>

<style lang="stylus" scoped>
.card-item {
  display: flex;
  flex-flow: row;
  padding: 0 0.16rem;
  box-sizing: border-box;
}

.card-item .avatar {
  width: 0.32rem;
  height: 0.32rem;
  border-radius: 50%;
  margin-right: 0.12rem;
  margin-top: 0.02rem;
  flex-shrink: 0;
}

.card-item .right-container {
  width: 100%;
  padding-bottom: 0.12rem;
}

.card-item .right-container .info-block {
  width: 100%;
  position: relative;
}

.card-item .right-container .info-block .name {
  font-size: 14px;
  line-height: 20px;
  color: #666666;
}

.card-item .right-container .info-block .time {
  font-size: 11px;
  line-height: 15px;
  color: #999999;
}

.card-item .right-container .info-block .zan-button {
  position: absolute;
  top: 50%;
  right: 0;
  transform: translateY(-50%);
  display: flex;
  flex-flow: row;
  align-items: center;
  font-size: 11px;
  color: #999;
  border: 0;
  background: #fff;
}

.card-item .right-container .info-block .zan-button .img-zan {
  width: 0.16rem;
  height: 0.16rem;
  margin-right: 0.04rem;
}

.card-item .right-container .content-block {
  font-size: 14px;
  line-height: 21px;
  color: #383838;
  margin-top: 0.12rem;
}

.card-item .right-container .reply-block {
  background: #F7F8FD;
  border-radius: 0.04rem;
  margin-top: 0.14rem;
  padding: 0.08rem;
}

.card-item .right-container .reply-block .reply-item {
  // margin-bottom 0.08rem
  font-size: 13px;
  line-height: 19px;
  color: #666;
}

.card-item .right-container .reply-block .fill-block {
  width: 100%;
  height: 0.08rem;
}

.card-item .right-container .reply-block .reply-item .name {
  color: #4891E1 !important;
  word-break: break-all;
}

.card-item .right-container .reply-block .reply-item span {
  vertical-align: middle;
}

.card-item .right-container .reply-block .img-pic {
  width: 0.12rem;
  height: 0.12rem;
  margin-left: 0.08rem;
  margin-right: 0.04rem;
  display: inline-block;
  vertical-align: middle;
}

.card-item .right-container .reply-block .show-pic-text {
  color: #4891E1;
}

.card-item .right-container .reply-block .showPic {
  font-size: 13px;
  line-height: 19px;
  color: #4891E1;
}

.card-item .right-container .reply-block .show-more {
  font-size: 13px;
  line-height: 19px;
  color: #4891E1;
  margin-top: 0.08rem;
}

.card-item .right-container .divide-line {
  margin-top: 0.12rem;
}

.content-image {
  width: 1.28rem;
}
</style>
