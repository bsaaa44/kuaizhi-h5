import 'babel-polyfill'
import Vue from "vue";
import Es6Promise from 'es6-promise';
Es6Promise.polyfill()
import App from "./App.vue";
import router from "./router";
import axios from 'axios'
import global from './components/Global.vue'
import utils from './assets/js/utils.js'
import { Loading,Popup,Toast,ImagePreview } from 'vant';

import './assets/css/reset.css'
import './assets/css/global.css'

// axios.defaults.baseURL = 'http://dev.kz.sync163.com/'
axios.defaults.baseURL = '/api'
axios.defaults.headers.common['token']='asdfasdfasdf'

Vue.use(Loading);
Vue.use(Popup);
Vue.use(Toast);
Vue.use(ImagePreview);

Vue.prototype.$utils = utils
Vue.prototype.$ajax = axios
Vue.prototype.$global = global

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
