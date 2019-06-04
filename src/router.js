import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import CardDetail from "./views/CardDetail.vue"

Vue.use(Router);

export default new Router({
  mode: "history",
  base: "/webpage",
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/cardDetail",
      name: "cardDetail",
      component: CardDetail
    }
  ]
});
