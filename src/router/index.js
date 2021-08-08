import Vue from "vue";
import VueRouter from "vue-router";

const Marketing = () => import("@/views/Marketing.vue");
const Finance = () => import("@/views/Finance.vue");
const Personal = () => import("@/views/Personal.vue");

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect: { name: "marketing" },
  },

  {
    path: "/marketing",
    name: "marketing",
    component: Marketing,
    meta: { title: "Marketing" },
  },

  {
    path: "/finance",
    name: "finance",
    component: Finance,
    meta: { title: "Finance" },
  },

  {
    path: "/personal",
    name: "personal",
    component: Personal,
    meta: { title: "Personal" },
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
