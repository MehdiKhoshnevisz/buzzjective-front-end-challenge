<template>
  <div id="app">
    <TheSidebar />

    <div class="bz-layout container">
      <router-view />
    </div>
  </div>
</template>

<script>
import TheSidebar from "@/components/TheSidebar";

export default {
  name: "App",

  components: {
    TheSidebar,
  },
};
</script>
