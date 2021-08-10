<template>
  <div :class="['bz-plugin-box', { 'bz-plugin-box--disabled': disabled }]">
    <div class="d-flex justify-content-between mb-2">
      <h2 class="bz-plugin-box__title">{{ title }}</h2>
      <div>
        <ToggleSwitch
          :name="`${kebabCaseFormat(`${title} switch`)}`"
          :is-active="isActive"
          @change="updatePlugin"
        />
      </div>
    </div>
    <p class="bz-plugin-box__description m-0">{{ description }}</p>
  </div>
</template>

<script>
import { kebabCaseFormat } from "@/utils/type";
import ToggleSwitch from "@/components/ToggleSwitch";

export default {
  name: "PluginBox",

  props: {
    title: {
      type: String,
      default: "Plugin",
    },
    description: {
      type: String,
      default: "lorem ipsum",
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    isActive: {
      type: Boolean,
      default: false,
    },
  },

  components: {
    ToggleSwitch,
  },

  methods: {
    kebabCaseFormat,

    updatePlugin(value) {
      this.$emit("update", value);
    },
  },
};
</script>

<style lang="scss" scoped>
.bz-plugin-box {
  padding: 1.5rem;
  min-height: 10rem;
  border: 3px solid $gray-300;
  border-radius: $border-radius-xl;

  &__title {
    margin: 0;
    font-weight: normal;
    font-size: $font-size-xl;
  }

  &__description {
    line-height: 1.5;
    color: $secondary;
    font-size: $font-size-lg;
  }

  &--disabled {
    opacity: 0.5;
    pointer-events: none;
  }
}
</style>
