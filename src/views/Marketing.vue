<template>
  <div>
    <PageTitle />

    <div class="row g-lg-5">
      <div
        v-for="(plugin, index) in plugins"
        :key="`${plugin.title}-${index}`"
        class="col-lg-4"
      >
        <PluginBox
          :title="`${plugin.title} ${index + 1}`"
          :description="plugin.description"
          :disabled="plugin.disabled"
          :is-active="plugin.isActive"
        />
      </div>
    </div>
  </div>
</template>

<script>
import PluginBox from "@/components/PluginBox";
import PageTitle from "@/components/PageTitle";

export default {
  name: "Marketing",

  components: {
    PluginBox,
    PageTitle,
  },

  computed: {
    plugins() {
      return [
        {
          title: "Plugin",
          disabled: true,
          isActive: false,
          description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus varius,
            felis eget mattis pulvinar, justo nisi scelerisque libero.`,
        },
        {
          title: "Plugin",
          disabled: false,
          isActive: true,
          description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus varius,
            felis eget mattis pulvinar, justo nisi scelerisque libero.`,
        },
        {
          title: "Plugin",
          disabled: false,
          isActive: true,
          description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus varius,
            felis eget mattis pulvinar, justo nisi scelerisque libero.`,
        },
        {
          title: "Plugin",
          disabled: false,
          isActive: true,
          description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus varius,
            felis eget mattis pulvinar, justo nisi scelerisque libero.`,
        },
        {
          title: "Plugin",
          disabled: false,
          isActive: false,
          description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus varius,
            felis eget mattis pulvinar, justo nisi scelerisque libero.`,
        },
        {
          title: "Plugin",
          disabled: false,
          isActive: false,
          description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus varius,
            felis eget mattis pulvinar, justo nisi scelerisque libero.`,
        },
      ];
    },
  },
};
</script>
