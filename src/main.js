import Vue from "vue";
import App from "./App.vue";
import store from "./store";
import router from "./router";
import VueProgressBar from "vue-progressbar";

import "./assets/scss/main.scss";
import "./assets/scss/lib/bootstrap5/bootstrap-grid.min.css";

Vue.config.productionTip = false;

Vue.use(VueProgressBar, {
  height: "4px",
  color: "#20c997",
  failedColor: "#dc3545",
});

new Vue({
  store,
  router,
  render: (h) => h(App),
}).$mount("#app");
