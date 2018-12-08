import Vue from "vue";
import Router from "vue-router";
const Home = () => import("@/views/home/index.vue");
const Money = () => import("@/views/money/index.vue");
const Ious = () => import("@/views/ious/index.vue");
const Raise = () => import("@/views/raise/index.vue");
const Download = () => import("@/views/special/download.vue");

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/money",
      name: "money",
      component: Money
    },
    {
      path: "/ious",
      name: "ious",
      component: Ious
    },
    {
      path: "/raise",
      name: "raise",
      component: Raise
    },
    {
      path: "/download",
      name: "download",
      component: Download
    }
  ]
});
