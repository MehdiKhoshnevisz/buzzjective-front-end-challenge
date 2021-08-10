<template>
  <div :class="{ 'bz-toggle-switch--flex': display === 'flex' }">
    <div>
      <input
        :class="[
          `bz-toggle-switch bz-toggle-switch--light bz-toggle-switch--${size}`,
          { 'bz-toggle-switch--power': hasPowerIcon },
        ]"
        v-model="toggleSwitchData"
        type="checkbox"
        :name="name"
        :id="name"
        @change="onChange"
      />
      <label class="bz-toggle-btn" :for="name"></label>
    </div>
    <span
      :class="[
        'bz-toggle-switch-title',
        { 'bz-toggle-switch-title--active': toggleSwitchData },
      ]"
      :style="textStyle"
      >{{ prefixText }} {{ toggleSwitchData ? activeText : inActiveText }}</span
    >
  </div>
</template>

<script>
export default {
  name: "ToggleSwitch",

  props: {
    name: {
      type: String,
      default: "toggle-switch",
    },
    isActive: {
      type: Boolean,
      default: false,
    },
    size: {
      type: String,
      default: "md",
    },
    display: {
      type: String,
      default: "block", // or 'flex'
    },
    activeText: {
      type: String,
      default: "Allowed",
    },
    inActiveText: {
      type: String,
      default: "Blocked",
    },
    prefixText: {
      type: String,
      default: "",
    },
    textStyle: {
      type: String,
      default: "",
    },
    hasPowerIcon: {
      type: Boolean,
      default: false,
    },
  },

  data() {
    return {
      toggleSwitchData: false,
    };
  },

  methods: {
    onChange() {
      this.$emit("change", this.toggleSwitchData);
    },
  },

  created() {
    this.toggleSwitchData = this.isActive;
  },

  watch: {
    isActive(value) {
      this.toggleSwitchData = value;
    },
  },
};
</script>

<style lang="scss" scoped>
.bz-toggle-switch {
  display: none;

  // add default box-sizing for this scope
  &,
  &::after,
  &::before,
  & *,
  & *::after,
  & *::before,
  & + .bz-toggle-btn {
    box-sizing: border-box;
    &::selection {
      background: none;
    }
  }

  + .bz-toggle-btn {
    outline: 0;
    display: block;
    width: 3.5rem;
    height: 2rem;
    position: relative;
    cursor: pointer;
    user-select: none;
    &::after,
    &::before {
      position: relative;
      display: block;
      content: "";
      width: 50%;
      height: 100%;
    }

    &::after {
      left: 0;
      box-shadow: -3px 3px 13px rgba(0, 0, 0, 0.2);
    }

    &::before {
      display: none;
    }
  }

  &:checked + .bz-toggle-btn:after {
    left: 50%;
  }

  &--light {
    + .bz-toggle-btn {
      background: $red;
      border-radius: 2em;
      padding: 3.3px;
      transition: all 0.4s ease;

      &::after {
        border-radius: 50%;
        background: #fff;
        transition: all 0.2s ease;
      }
    }

    &:checked + .bz-toggle-btn {
      background: $teal;

      &::after {
        color: $teal;
      }
    }
  }

  &--power {
    + .bz-toggle-btn {
      &::after {
        color: $red;
        display: flex;
        font-size: 110%;
        align-items: center;
        content: $icon-power;
        justify-content: center;
        font-family: $icomoon-font-family;
      }
    }
  }

  &--lg {
    + .bz-toggle-btn {
      width: 3.8rem;
      height: 2.2rem;
    }
  }

  &-title {
    color: $red;
    margin-top: 0.5rem;
    display: inline-block;
    font-size: $font-size-base;

    &--active {
      color: $teal;
    }
  }

  &--flex {
    display: flex;
    align-items: center;
    flex-direction: row-reverse;
    justify-content: space-between;

    .bz-toggle-switch-title {
      margin: 0;
    }
  }
}
</style>
