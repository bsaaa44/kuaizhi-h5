import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import CardDetail from "./views/CardDetail.vue"
import OpenTips from "./views/OpenTips.vue"

Vue.use(Router);

export default new Router({
  mode: "history",
  base: "/web",
  routes: [
    {
      path: "/topic/:id",
      name: "home",
      component: Home
    },
    {
      path: "/card/:id",
      name: "cardDetail",
      component: CardDetail
    },
    {
      path: "/openTips",
      name: "openTips",
      component: OpenTips
    }
  ]
});
