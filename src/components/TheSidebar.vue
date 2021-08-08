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
      <span>All Plugins Enabled</span>
    </div>
  </aside>
</template>

<script>
export default {
  name: "TheSidebar",

  computed: {
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
};
</script>

<style lang="scss" scoped>
.bz-sidebar {
  display: flex;
  min-width: 18.75rem;
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
        border-left: 5px solid transparent;

        i {
          margin-right: 0.8rem;
        }
      }
    }
  }

  &__plugins-status {
    padding: 1.5rem 2rem;
  }
}

.router-link-active {
  background-color: white;
  border-left: 5px solid $red;
}
</style>
