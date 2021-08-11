<template>
  <div id="app">
    <TheSidebar />

    <div v-if="isLoading" />

    <div class="bz-layout" v-else>
      <router-view />
    </div>

    <vue-progress-bar></vue-progress-bar>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
import { getPlugins } from "@/api/plugins";
import TheSidebar from "@/components/TheSidebar";

export default {
  name: "App",

  components: {
    TheSidebar,
  },

  data() {
    return {
      isLoading: false,
    };
  },

  methods: {
    ...mapMutations("data", ["SET_PLUGINS", "SET_TAB_DATA"]),

    async initData() {
      this.isLoading = true;
      this.$Progress.start();

      try {
        const res = await getPlugins();

        const { data } = res.data;

        const plugins = data.plugins;
        const tabData = data.tabdata;

        this.SET_PLUGINS(plugins);
        this.SET_TAB_DATA(tabData);
      } catch (error) {
        console.error(error);
        this.$Progress.fail();
      } finally {
        this.isLoading = false;
        this.$Progress.finish();
      }
    },
  },

  created() {
    this.initData();
  },
};
</script>
