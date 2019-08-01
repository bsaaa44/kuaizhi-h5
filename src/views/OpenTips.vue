<template>
  <div id="main">
    <img src="../assets/tips.png" class="img-tips" v-if="showOpenTips" />
  </div>
</template>

<script>
import { setTimeout } from "timers";
export default {
  data() {
    return {
      showOpenTips: false,
      id: 0,
      timer: "",
      page: ""
    };
  },
  created() {
    window.addEventListener(
      "pagehide",
      function() {
        clearTimeout(this.timer);
      },
      false
    );
    document.addEventListener(
      "visibilitychange",
      function() {
        var tag = document.hidden || document.webkitHidden;
        tag && clearTimeout(this.timer);
      },
      false
    );
    document.addEventListener(
      "webkitvisibilitychange",
      function() {
        var tag = document.hidden || document.webkitHidden;
        tag && clearTimeout(this.timer);
      },
      false
    );
    if (this.checkBrowser() == "wx" || this.checkBrowser() == "qq") {
      this.showOpenTips = true;
    }else if (this.checkBrowser() == "safari") {
      if(window.location.href.indexOf("kz.sync163.com")>=0){
        var start = Date.now();
        setTimeout(function() {
          // 必须要使用settimeout
          let openUrl = window.location.href.replace(
            "kz.sync163.com",
            "kuaizhi.app"
          );
          console.log("openUrl", openUrl);
          var ar = document.createElement("a");
          ar.setAttribute("href", openUrl);
          ar.style.display = "none";
          document.body.appendChild(ar);
          var av = document.createEvent("HTMLEvents");
          av.initEvent("click", !1, !1);
          ar.dispatchEvent(av);
        }, 0);
      }
      this.timer = setTimeout(() => {
        if (document.hidden || document.webkitHidden) {
          return;
        }
        if (Date.now() - start > 1500 + 200) {
        } else {
          window.location.href = "https://apps.apple.com/cn/app/%E5%BF%AB%E7%9F%A5-%E8%AE%A9%E4%BF%A1%E6%81%AF%E8%8E%B7%E5%8F%96%E6%9B%B4%E9%AB%98%E6%95%88/id1465578855";
        }
      }, 1500);
    }
    // window.addEventListener("pagehide", function() {
    //   console.log('进来了')
    //   clearTimeout(this.timer);
    // }, false);
    // this.id = this.$route.query.id;
    // this.page = this.$route.query.page;
    // this.$nextTick(() => {
    //   if (this.checkBrowser() == "wx") {
    //     this.showOpenTips = true;
    //   } else if (this.checkBrowser() == "safari") {
    //     let url = window.location.href.replace("kz.sync163.com", "kuaizhi.app");
    //     window.location.href = url;
    //     let loadDateTime = Date.now();
    //     this.timer = setTimeout(() => {
    //       if(!document.hidden){
    //         window.location.href = "https://testflight.apple.com/join/hFuy6byk";
    //       }
    //       // let timeOutDateTime = Date.now();
    //       // if (timeOutDateTime - loadDateTime < 1000) {
    //       //   window.location.href = "https://testflight.apple.com/join/hFuy6byk";
    //       // }
    //       // console.log("是safari浏览器尝试跳转失败，跳appstore");
    //     }, 25);
    // }
    // });
  },
  methods: {
    checkBrowser: function() {
      console.log("进来了");
      let ua = navigator.userAgent.toLowerCase();
      let isChrome = ua.indexOf("chrome") != -1;
      let isSafari = ua.indexOf("safari") != -1;
      // let is360 = checkMime("type", "application/vnd.chromium.remoting-viewer");
      if (ua.match(/MicroMessenger/i) == "micromessenger") {
        return "wx";
      }
      if(ua.match(/QQ/i) == "qq"){
        return "qq";
      }
      if (!isChrome && isSafari) {
        return "safari";
      }
    }
  }
};
</script>

<style lang="stylus" scoped>
.img-tips {
  width: 100%;
}
</style>
