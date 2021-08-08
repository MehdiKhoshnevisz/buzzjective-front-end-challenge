<template>
  <div class="bz-plugin-box">
    <div class="d-flex justify-content-between mb-4">
      <h2 class="bz-plugin-box__title">Plugin 1</h2>
      <div>Allowed</div>
    </div>
    <p class="bz-plugin-box__caption m-0">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus varius,
      felis eget mattis pulvinar, justo nisi scelerisque libero, vitae fringilla
      tellus magna sit amet nisi.
    </p>
  </div>
</template>

<script>
export default {
  name: "PluginBox",
};
</script>

<style lang="scss" scoped>
.bz-plugin-box {
  padding: 1.5rem;
  min-height: 8.9rem;
  border: 3px solid $gray-300;
  border-radius: $border-radius-xl;

  &__title {
    margin: 0;
    font-weight: normal;
    font-size: $font-size-lg;
  }

  &__caption {
    line-height: 1.5;
    color: $secondary;
    font-size: $font-size-base;
  }
}
</style>
