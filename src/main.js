import 'babel-polyfill'
import Vue from 'vue'
import Es6Promise from 'es6-promise'
Es6Promise.polyfill()
import App from './App.vue'
import router from './router'
import axios from 'axios'
import global from './components/Global.vue'
import utils from './assets/js/utils.js'
import { Loading, Popup, Toast } from 'vant'
import VueLazyload from 'vue-lazyload'
// import Video from 'video.js'
// import 'videojs-contrib-hls'
import preview from 'vue-photo-preview'
import 'vue-photo-preview/dist/skin.css'
import 'video.js/dist/video-js.css'
import './assets/css/reset.css'
import './assets/css/global.css'

axios.defaults.baseURL = 'https://kz.sync163.com'
// axios.defaults.baseURL = 'http://dev.kz.sync163.com'
// axios.defaults.baseURL = '/'
axios.defaults.headers.common['token'] = 'asdfasdfasdf'

Vue.use(Loading)
Vue.use(Popup)
Vue.use(Toast)
// Vue.use(ImagePreview);
let options = {
  fullscreenEl: false,
  tapToClose: true
}
Vue.use(preview, options)
Vue.use(VueLazyload, {
  error: '../src/assets/placeholder.png',
  filter: {
    progressive(listener, options) {
      let isCDN = 'cdn.sync163.com'
      let isCDN2 = 'alcdn.sync163.com'
      let isCDN3 = 'cdnv2.sync163.com'
      if (
        listener.src.indexOf(isCDN) >= 0 ||
        listener.src.indexOf(isCDN2) >= 0 ||
        listener.src.indexOf(isCDN3) >= 0
      ) {
        listener.src = listener.src + '/thumb'
      }
    }
  }
})

// Vue.prototype.$preview.on('gettingData',function(index,item){
//   console.log('item',item)
//   // if(item.src.indexOf('/thumb')>=0){
//   //   item.src = item.src.replace("/thumb","")
//   // }
//   // let img = new Image()
//   // img.src = item.src
//   // img.onload = function(){
//   //   item.w = img.width/10
//   //   item.h = img.height/10
//   // }
//   // Vue.prototype.$preview.self.updateSize()
//   // console.log(Vue.prototype.$preview)
// })

Vue.prototype.$utils = utils
Vue.prototype.$ajax = axios
Vue.prototype.$global = global
// Vue.prototype.$video = Video

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
