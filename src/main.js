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
import VuePreview from 'vue-preview'
import VueLazyload from 'vue-lazyload'

import './assets/css/reset.css'
import './assets/css/global.css'

axios.defaults.baseURL = 'http://dev.kz.sync163.com/api'
// axios.defaults.baseURL = '/api'
axios.defaults.headers.common['token']='asdfasdfasdf'

Vue.use(Loading);
Vue.use(Popup);
Vue.use(Toast);
Vue.use(VuePreview)
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
