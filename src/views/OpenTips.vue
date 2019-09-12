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
    if (this.checkBrowser() == "android") {
      this.androidOpenApp();
    } else if (this.checkBrowser() == "wx" || this.checkBrowser() == "qq") {
      this.showOpenTips = true;
      // this.androidOpenApp();
    } else if (this.checkBrowser() == "safari") {
      this.iosOpenApp();
    }
  },
  methods: {
    iosOpenApp: function() {
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
      if (window.location.href.indexOf("kz.sync163.com") >= 0) {
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
          alert("开始尝试跳转");
          window.location.href =
            "https://apps.apple.com/cn/app/%E5%BF%AB%E7%9F%A5-%E8%AE%A9%E4%BF%A1%E6%81%AF%E8%8E%B7%E5%8F%96%E6%9B%B4%E9%AB%98%E6%95%88/id1465578855";
        }
      }, 1500);
    },
    androidOpenApp: function() {
      var createIframe = (function() {
        var iframe;
        return function() {
          if (iframe) {
            return iframe;
          } else {
            iframe = document.createElement("iframe");
            iframe.style.display = "none";
            document.body.appendChild(iframe);
            return iframe;
          }
        };
      })();
      let openIframe = createIframe();
      let isChrome = window.navigator.userAgent.indexOf("Chrome") !== -1;
      // if (isWeiXin()) {
      //   //如果是微信，跳应用宝
      //   window.location.href = "应用宝链接";
      // } else {
      //如果不是微信，某秒之后打不开（说明没有下载app）就直接下载
      let url = "";
      if (this.$route.query.page == "TopicListViewController") {
        url = `kuaizhi://TopicListViewController?id=${this.$route.query.id}`;
      } else {
        url = `kuaizhi://FeedDetailViewController?id=${this.$route.query.id}`;
      }
      if (isChrome) {
        //chrome浏览器用iframe打不开得直接去打开，算一个坑
        window.location.href = url;
      } else {
        //抛出你的scheme
        openIframe.src = url;
      }
      var startTime = Date.now();
      var t = setTimeout(function() {
        var endTime = Date.now();
        if (!startTime || endTime - startTime < 600 + 200) {
          // window.location.href = "www.baidu.com";
          // alert("请先下载app");
        }
      }, 600);
      document.addEventListener(
        "visibilitychange webkitvisibilitychange",
        function() {
          var tag = document.hidden || document.webkitHidden;
          if (tag) {
            clearTimeout(t);
          }
        }
      );
      window.addEventListener("pagehide", function() {
        clearTimeout(t);
      });
      window.addEventListener("blur", function() {
        clearTimeout(t);
      });
    },
    checkBrowser: function() {
      let ua = navigator.userAgent.toLowerCase();
      alert(ua)
      let isChrome = ua.indexOf("chrome") != -1;
      let isSafari = ua.indexOf("safari") != -1;
      let isAndroid =
        ua.indexOf("android") > -1 ||
        ua.indexOf("adr") > -1 ||
        ua.indexOf("Android") > -1 ||
        ua.indexOf("Adr") > -1;
      // let is360 = checkMime("type", "application/vnd.chromium.remoting-viewer");
      if (ua.match(/MicroMessenger/i) == "micromessenger") {
        return "wx";
      }
      if (isAndroid) {
        alert("安卓")
        return "android";
      }
      if (ua.match(/QQ/i) == "qq") {
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
