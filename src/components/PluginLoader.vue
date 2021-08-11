<template>
  <div class="row g-lg-5 g-4">
    <div
      v-for="(plugin, index) in plugins"
      :key="`${plugin.title}-${index}`"
      class="col-xl-4 col-md-6 col-12"
      v-show="isShowPlugin(tabName, nonSpaceFormat(plugin.title))"
    >
      <transition name="fade">
        <PluginBox
          v-if="isShowPlugin(tabName, nonSpaceFormat(plugin.title))"
          :title="`${capitalize(plugin.title)}`"
          :description="plugin.description"
          :disabled="
            isDisabledAllPlugins ||
            selectedTabDate(tabName).disabled.includes(
              nonSpaceFormat(plugin.title)
            )
          "
          :is-active="
            selectedTabDate(tabName).active.includes(
              nonSpaceFormat(plugin.title)
            )
          "
          @update="onUpdatePlugin($event, nonSpaceFormat(plugin.title))"
        />
      </transition>
    </div>
  </div>
</template>

<script>
import PluginBox from "@/components/PluginBox";
import { mapState, mapGetters, mapMutations } from "vuex";
import { capitalize, nonSpaceFormat } from "@/utils/type";

export default {
  name: "PluginLoader",

  components: {
    PluginBox,
  },

  computed: {
    ...mapState("data", ["plugins", "isDisabledAllPlugins"]),
    ...mapGetters("data", ["isShowPlugin", "selectedTabDate"]),

    tabName() {
      return this.$route.meta.tab;
    },
  },

  methods: {
    capitalize,
    nonSpaceFormat,
    ...mapMutations("data", ["UPDATE_PLUGIN"]),

    onUpdatePlugin(isActive, plugin) {
      this.UPDATE_PLUGIN({
        tab: this.tabName,
        plugin,
        isActive,
      });
    },
  },
};
</script>
