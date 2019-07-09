<style lang="stylus" scoped>
.container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 99;

  .content {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 60px;
    height: 60px;
    border-radius: 5px;

    .background {
      position: absolute;
      top: 0;
      left: 0;
      width: 60px;
      height: 60px;
      border-radius: 5px;
      background: #000;
      opacity: 0.7;
      z-index: -1;
    }

    .loading {
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  }
}
</style>

<template>
  <div class="container" @touchmove.prevent v-on:click.stop="prevent">
    <div class="content" v-on:click.stop="prevent">
      <div class="background" v-on:click.stop="prevent"></div>
      <van-loading color="white" class="loading" v-on:click.stop="prevent" />
    </div>
  </div>
</template>
  
<script>
export default {
  data() {
    return {};
  },
  methods: {
    prevent: function() {
      console.log("prevent");
    }
  }
};
</script>
