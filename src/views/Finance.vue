<template>
  <div>
    <PageTitle />

    <div class="row g-lg-5">
      <div class="col-lg-4">
        <PluginBox />
      </div>
    </div>
  </div>
</template>

<script>
import PluginBox from "@/components/PluginBox";
import PageTitle from "@/components/PageTitle";

export default {
  name: "Finance",

  components: {
    PluginBox,
    PageTitle,
  },
};
</script>
