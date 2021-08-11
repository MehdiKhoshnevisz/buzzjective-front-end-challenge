<template>
  <aside class="bz-sidebar">
    <div style="flex: 1">
      <header class="bz-sidebar__header">
        <span class="bz-sidebar__header__title">Data<b>Guard</b></span>
      </header>

      <nav class="bz-sidebar__list">
        <router-link
          v-for="(link, index) in links"
          :key="`${link.title}-${index}`"
          :to="link.to"
          class="bz-sidebar__list__item__link"
        >
          <i :class="link.icon"></i>
          <span>{{ link.title }}</span>
        </router-link>
      </nav>
    </div>

    <div class="bz-sidebar__plugins-status">
      <ToggleSwitch
        name="global-toggle-switch"
        size="lg"
        display="flex"
        :is-active="true"
        :has-power-icon="true"
        active-text="enabled"
        in-active-text="disabled"
        prefix-text="All plugins"
        text-style="color: black;"
        @change="updateAllPlugins"
      />
    </div>

    <div
      :class="[
        `bz-sidebar__overlay bz-sidebar__overlay--${
          isDisabledAllPlugins ? 'inactive' : 'active'
        }`,
      ]"
    ></div>
  </aside>
</template>

<script>
import { mapState, mapMutations } from "vuex";
import ToggleSwitch from "@/components/ToggleSwitch";

export default {
  name: "TheSidebar",

  components: {
    ToggleSwitch,
  },

  computed: {
    ...mapState("data", ["isDisabledAllPlugins"]),

    links() {
      return [
        {
          id: 1,
          to: { name: "marketing" },
          icon: "icon-marketing",
          title: "Marketing",
        },

        {
          id: 2,
          to: { name: "finance" },
          icon: "icon-finance",
          title: "Finance",
        },

        {
          id: 3,
          to: { name: "personal" },
          icon: "icon-people",
          title: "Personal",
        },
      ];
    },
  },

  methods: {
    ...mapMutations("data", ["SET_DISABLED"]),

    updateAllPlugins(value) {
      this.SET_DISABLED(!value);
    },
  },
};
</script>

<style lang="scss" scoped>
.bz-sidebar {
  display: flex;
  position: relative;
  min-width: 20rem;
  flex-direction: column;
  background-color: rgba($red, 0.05);

  &__header {
    padding: 1.5rem 2rem;
    margin-bottom: 0.5rem;

    &__title {
      font-size: $font-size-xxl;
    }
  }

  &__list {
    margin: 0;
    padding: 0;
    list-style-type: none;

    &__item {
      &__link {
        color: $dark;
        display: block;
        padding: 1rem 1.5rem;
        font-size: $font-size-lg;
        transition: all 0.2s ease-in-out;
        border-left: 5px solid transparent;

        i {
          margin-right: 0.8rem;
        }
      }
    }
  }

  &__plugins-status {
    z-index: 50;
    padding: 1.5rem 2rem;
  }

  &__overlay {
    bottom: 0;
    width: 100%;
    height: 3rem;
    position: absolute;
    transition: all 0.5s ease;
    background: rgb(255, 255, 255);
    background: linear-gradient(
      360deg,
      rgba(255, 255, 255, 1) 0%,
      rgba(255, 255, 255, 0) 100%
    );

    &--active {
      background: linear-gradient(
        360deg,
        rgba($teal, 0.4) 0%,
        rgba(255, 255, 255, 0) 100%
      );
    }

    &--inactive {
      background: linear-gradient(
        360deg,
        rgba($red, 0.4) 0%,
        rgba(255, 255, 255, 0) 100%
      );
    }
  }
}

.router-link-active {
  background-color: white;
  border-left: 5px solid $red;
}
</style>
