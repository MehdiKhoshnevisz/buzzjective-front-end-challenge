<template>
  <div>
    <PageTitle />
    <PluginLoader />
  </div>
</template>

<script>
import PageTitle from "@/components/PageTitle";
import PluginLoader from "@/components/PluginLoader";

export default {
  name: "Index",

  components: {
    PageTitle,
    PluginLoader,
  },
};
</script>
