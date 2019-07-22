<template>
  <div>
    <join-pop @handleClosePop="handleClosePop" v-if="showJoinPop" />
    <download-bar @handleShowPop="handleShowPop" />
    <div class="page" v-if="info!=''">
      <div class="header-block">
        <div class="robot-contain">
          <div class="info-block">
            <img :src="info.topic.icon" class="avatar" :onerror="imagePlaceholder" />
            <div class="middle">
              <h1 class="title">{{info.topic.name}}</h1>
              <p class="time">{{info.created_at}}</p>
            </div>
            <button class="subscript-btn" @click="handleShowPop(1)">订阅</button>
          </div>
          <card-item
            :item="info"
            :index="0"
            :showTimeBlock="false"
            :isDetailPage="true"
            :cover="info.topic.icon"
            class="card-item"
            @handleShowPop="handleShowPop"
          />
        </div>
        <robot-info-block
          class="robot-info-block"
          :robots="info.fromRobots"
          @handleShowPop="handleShowPop"
        />
      </div>
      <div class="comment-block" v-if="info.commentsCount>0">
        <div class="title-block">评论{{info.commentsCount>0?"·"+info.commentsCount:""}}</div>
        <div class="divide-line"></div>
        <comment-item
          class="comment-item"
          v-for="(item,index) in list"
          :item="item"
          :key="index"
          @handleShowPop="handleShowPop"
        />
        <template v-if="showMoreBtn">
          <div class="divide-line"></div>
          <div class="show-more">查看更多评论</div>
        </template>
        <!-- <infinite-loading @infinite="onInfinite" ref="infiniteLoading" spinner="bubbles">
          <span slot="no-more"></span> 
          <span slot="no-results"></span>     
        </infinite-loading>-->
      </div>
    </div>
    <button class="open-btn" @click="handleShowPop(2)">App 内打开</button>
    <loading v-if="showLoading"></loading>
    <android-pop @closePop="closePop()" :showAndroidPop="showAndroidPop"></android-pop>
  </div>
</template>

<script>
import Loading from "../components/Loading";
import CardItem from "../components/CardItem.vue";
import DownloadBar from "../components/DownloadBar.vue";
import RobotInfoBlock from "../components/RobotInfoBlock.vue";
import CommentItem from "../components/CommentItem.vue";
import InfiniteLoading from "vue-infinite-loading";
import JoinPop from "../components/JoinPop.vue";
import AndroidPop from "../components/AndroidPop.vue";
export default {
  data() {
    return {
      imagePlaceholder:
        'this.src="' + require("../assets/placeholder.png") + '"',
      id: 0,
      info: "",
      list: [],
      currentPage: 1,
      inviteUid: 0,
      userInfo: "",
      showAndroidPop: false,
      showJoinPop: false,
      showLoading: false,
      showMoreBtn: false
    };
  },
  components: {
    CardItem,
    RobotInfoBlock,
    CommentItem,
    DownloadBar,
    Loading,
    InfiniteLoading,
    JoinPop,
    AndroidPop
  },
  created() {
    if(localStorage.getItem("userInfo")){
      this.userInfo = localStorage.getItem("userInfo")
    }
    if (this.checkWxBrowser()) {
      if (this.$route.query.uid) {
        this.$global.inviteUid = this.$route.query.uid;
      }
      this.$global.cardId = this.$route.params.id;
      this.checkCode();
    } else {
      this.id = this.$route.params.id;
      this.showLoading = true;
      this.$nextTick(() => {
        this.getInfo();
        this.getList();
      });
    }
  },
  methods: {
    closePop: function() {
      this.showAndroidPop = false;
    },
    checkCode: function() {
      if (this.$global.code != "" || this.$route.query.code) {
        if (this.$global.code == "") {
          this.$global.code = this.$route.query.code;
        }
        if (sessionStorage.getItem("token")) {
          this.id = this.$global.cardId;
          this.inviteUid = this.$global.inviteUid;
          console.log("登陆成功");
          this.$nextTick(() => {
            this.getInfo();
            this.getList();
          });
        } else {
          let data = {
            code: this.$route.query.code
          };
          this.$utils.login(data).then(res => {
            console.log("登陆中...");
            sessionStorage.setItem("token", res.data.token);
            localStorage.setItem("userInfo", res.data.userInfo);
            // this.$global.hasLogin = true
            this.id = this.$global.cardId;
            this.$global.userInfo = res.data.userInfo;
            this.userInfo = res.data.userInfo;
            this.inviteUid = this.$global.inviteUid;
            console.log("登陆成功");
            this.$nextTick(() => {
              let data = {
                event: "h5_login",
                logUserId: res.data.userInfo.id,
                param: {
                  cardId: this.id,
                  inviter: this.inviteUid
                }
              };
              this.$utils.clientLog(data);
              this.getInfo();
              this.getList();
            });
          });
        }
      } else {
        if (this.$global.code.length == 0) {
          let url = window.location.href;
          this.$utils.getCode(url);
          this.showLoading = false;
        }
      }
    },
    checkWxBrowser: function() {
      let ua = navigator.userAgent.toLowerCase();
      if (ua.match(/MicroMessenger/i) == "micromessenger") {
        return true;
      } else {
        return false;
      }
    },
    handleShowPop: function(type) {
      // this.showJoinPop = true
      if (type === 1) {
        let data = {
          event: "h5_subscribe",
          logUserId: this.userInfo.id,
          param: {
            inviter: this.$global.inviteUid
          }
        };
        this.$utils.clientLog(data);
      } else if (type === 2) {
        let data = {
          event: "h5_openApp",
          logUserId: this.userInfo.id,
          param: {
            inviter: this.$global.inviteUid
          }
        };
        this.$utils.clientLog(data);
      }
      let ua = navigator.userAgent;
      if (ua.indexOf("Android") > -1 || ua.indexOf("Adr") > -1) {
        this.showAndroidPop = true;
      } else if (!!ua.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/)) {
        this.$router.push({
          path: "/openTips",
          query: {
            page: "FeedDetailViewController",
            id: this.id
          }
        });
        window.location = window.location;
      }
    },
    handleClosePop: function() {
      this.showJoinPop = false;
    },
    onInfinite: function($state) {
      this.getList()
        .then(res => {
          if (res.data.list.length > 0) {
            $state.loaded();
          } else {
            $state.complete();
          }
        })
        .catch(() => {
          $state.complete();
        });
    },
    getInfo: function() {
      let data = {
        card_id: this.id
      };
      this.$utils.axiosRequest(
        "POST",
        "api/feed/card/info",
        "",
        data,
        res => {
          this.info = res.data.info;
          this.$nextTick(() => {
            this.showLoading = false;
          });
        },
        res => {
          this.showLoading = false;
        }
      );
    },
    getList: function() {
      return new Promise((resolve, reject) => {
        let data = {
          page: this.currentPage,
          type: 0,
          target_id: this.id
        };
        this.$utils.axiosRequest(
          "POST",
          "api/comment/list",
          "",
          data,
          res => {
            if (res.data.list.length > 5) {
              this.showMoreBtn = true;
            }
            res.data.list = res.data.list.slice(0, 5);
            if (this.list.length <= 0) {
              this.list = res.data.list;
            } else {
              this.list = this.list.concat(res.data.list);
            }
            if (res.data.list.length > 0) {
              ++this.currentPage;
            }
            resolve(res);
          },
          res => {
            reject(res);
          }
        );
      });
    }
  }
};
</script>

<style lang="stylus" scoped>
.open-btn {
  position: fixed;
  bottom: 0.8rem;
  left: 50%;
  transform: translateX(-50%);
  border: 0;
  // width 1rem
  height: 0.32rem;
  border-radius: 0.16rem;
  padding: 0 0.13rem;
  background: #007aff;
  color: #fff;
  font-size: 14px;
  display: flex;
  flex-flow: row;
  align-items: center;
  justify-content: center;
  box-shadow: 0 0 4px 0 rgba(0, 0, 0, 0.12);
}

.page {
  background: #F7F7F7;
}

.header-block {
  background: #fff;
  display: flex;
  flex-flow: column;
  align-items: center;
  padding-top: 0.15rem;
  padding-bottom: 0.16rem;
}

.robot-contain {
  width: 91.47%;
  // width 3.43rem;
  background: #fff;
  box-shadow: 0 0.02rem 0.1rem 0 rgba(218, 218, 218, 0.5);
  border-radius: 0.1rem;
}

.robot-contain .info-block {
  display: flex;
  flex-flow: row;
  align-items: center;
  padding: 0.12rem 0.12rem 0;
  box-sizing: border-box;
}

.robot-contain .info-block .avatar {
  width: 0.34rem;
  height: 0.34rem;
  border-radius: 0.03rem;
  margin-right: 0.08rem;
  flex-shrink: 0;
}

.robot-contain .info-block .middle {
  flex-grow: 1;
}

.robot-contain .info-block .title {
  font-size: 14px;
  line-height: 20px;
  color: #333333;
}

.robot-contain .info-block .time {
  font-size: 11px;
  line-height: 15px;
  color: #999;
}

.robot-contain .info-block .subscript-btn {
  flex-shrink: 0;
  border: 0;
  width: 0.6rem;
  height: 0.28rem;
  line-height: 0.28rem;
  border-radius: 0.14rem;
  background: #007AFF;
  color: #fff;
}

.robot-contain .card-item {
  padding: 0 0.12rem;
}

.robot-info-block {
  width: 91.47%;
  // width 3.43rem;
  height: 0.56rem;
  background: #fff;
  box-shadow: 0 0.02rem 0.1rem 0 rgba(218, 218, 218, 0.5);
  margin-top: 0.2rem;
}

.comment-block {
  margin-top: 0.08rem;
  background: #fff;
}

.comment-block .title-block {
  padding: 0 0.16rem;
  box-sizing: border-box;
  height: 0.44rem;
  line-height: 0.44rem;
  font-size: 15px;
  font-weight: bold;
  color: #333;
}

.comment-block .comment-item {
  margin-top: 0.15rem;
}

.comment-block .show-more {
  width: 100%;
  height: 0.4rem;
  display: flex;
  flex-flow: row;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  color: #007aff;
}
</style>
