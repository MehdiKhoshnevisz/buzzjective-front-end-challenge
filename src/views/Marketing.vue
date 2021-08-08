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
          description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus varius,
            felis eget mattis pulvinar, justo nisi scelerisque libero, vitae fringilla
            tellus magna sit amet nisi.`,
        },
        {
          title: "Plugin",
          disabled: false,
          description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus varius,
            felis eget mattis pulvinar, justo nisi scelerisque libero, vitae fringilla
            tellus magna sit amet nisi.`,
        },
        {
          title: "Plugin",
          disabled: false,
          description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus varius,
            felis eget mattis pulvinar, justo nisi scelerisque libero, vitae fringilla
            tellus magna sit amet nisi.`,
        },
        {
          title: "Plugin",
          disabled: false,
          description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus varius,
            felis eget mattis pulvinar, justo nisi scelerisque libero, vitae fringilla
            tellus magna sit amet nisi.`,
        },
        {
          title: "Plugin",
          disabled: false,
          description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus varius,
            felis eget mattis pulvinar, justo nisi scelerisque libero, vitae fringilla
            tellus magna sit amet nisi.`,
        },
        {
          title: "Plugin",
          disabled: false,
          description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus varius,
            felis eget mattis pulvinar, justo nisi scelerisque libero, vitae fringilla
            tellus magna sit amet nisi.`,
        },
      ];
    },
  },
};
</script>
