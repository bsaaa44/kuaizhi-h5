<template>
  <div v-if="showAndroidPop">
    <div class="main">
      <h3 class="title">暂无安卓版本</h3>
      <p class="desc">关注「快知App」获取最新消息</p>
      <img class="img-qrcode" src="../assets/qrcode.jpg" />
      <span class="info">长按识别二维码</span>
    </div>
    <div class="cover" @click="closePop()"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  props: {
    showAndroidPop: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    closePop: function() {
      this.$emit("closePop");
    }
  }
};
</script>

<style lang="stylus" scoped>
.main {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 3rem;
  padding: 0.15rem;
  background: #fff;
  border-radius: 0.05rem;
  z-index: 10001;

  .title {
    font-size: 16px;
    color: #333;
    font-weight: bold;
    text-align: center;
    margin-top: 0.05rem;
  }

  .desc {
    font-size: 14px;
    line-height: 20px;
    color: #333;
    text-align: center;
    margin-top: 0.2rem;
  }

  .img-qrcode {
    display: block;
    width: 2.5rem;
    margin: 0 auto;
  }

  .info {
    display: block;
    width: 100%;
    font-size: 12px;
    color: #999;
    text-align: center;
  }
}

.cover {
  width: 100%;
  height: 100%;
  background: #000;
  opacity: 0.5;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10000;
}
</style>

