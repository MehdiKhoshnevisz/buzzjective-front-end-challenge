<template>
  <h1 class="bz-page-title mb-5 mt-0">{{ pageTitle }} Plugins</h1>
</template>

<script>
import pageMixin from "@/mixins/pageMixin";

export default {
  name: "Marketing",

  mixins: [pageMixin],
};
</script>

<style lang="scss" scoped>
.bz-page-title {
  font-weight: normal;
  font-size: $font-size-xl;
}
</style>
