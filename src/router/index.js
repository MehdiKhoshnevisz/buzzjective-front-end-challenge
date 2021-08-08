import Vue from "vue";
import VueRouter from "vue-router";

const Marketing = () => import("@/views/Marketing.vue");

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Marketing",
    component: Marketing,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
