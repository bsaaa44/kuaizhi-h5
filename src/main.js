import 'babel-polyfill'
import Vue from "vue";
import Es6Promise from 'es6-promise';
Es6Promise.polyfill()
import App from "./App.vue";
import router from "./router";
import axios from 'axios'
import global from './components/Global.vue'
import utils from './assets/js/utils.js'
import { Loading,Popup,Toast } from 'vant';
import VueLazyload from 'vue-lazyload'
import preview from 'vue-photo-preview'
import 'vue-photo-preview/dist/skin.css'

import './assets/css/reset.css'
import './assets/css/global.css'

axios.defaults.baseURL = 'http://dev.kz.sync163.com/api'
// axios.defaults.baseURL = '/api'
axios.defaults.headers.common['token']='asdfasdfasdf'

Vue.use(Loading);
Vue.use(Popup);
Vue.use(Toast);
let options = {
  fullscreenEl:false,
  tapToClose: true,
  addCaptionHTMLFn: function(item, captionEl, isFake){
    console.log(item)
    if(item.src.indexOf('/thumb')>=0){
      item.src = item.src.replace('/thumb',"")
    }
  } 
}
Vue.use(preview,options)
Vue.use(VueLazyload,{
  filter: {
    progressive(listener,options){
      let isCDN = 'cdn.sync163.com'
      if(listener.src.indexOf(isCDN)>=0){
        // listener.el.setAttribute('lazy-progressive', 'true')
        listener.src = listener.src + '/thumb'
      }
    }
  }
})

Vue.prototype.$utils = utils
Vue.prototype.$ajax = axios
Vue.prototype.$global = global

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
