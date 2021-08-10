import Vue from "vue";
import VueRouter from "vue-router";

// const Marketing = () => import("@/views/Marketing.vue");
// const Finance = () => import("@/views/Finance.vue");
// const Personal = () => import("@/views/Personal.vue");

const Main = () => import("@/views/index.vue");

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect: { name: "marketing" },
  },

  {
    path: "/marketing",
    name: "marketing",
    component: Main,
    meta: { title: "Marketing", tab: "tab1" },
  },

  {
    path: "/finance",
    name: "finance",
    component: Main,
    meta: { title: "Finance", tab: "tab2" },
  },

  {
    path: "/personal",
    name: "personal",
    component: Main,
    meta: { title: "Personal", tab: "tab3" },
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
