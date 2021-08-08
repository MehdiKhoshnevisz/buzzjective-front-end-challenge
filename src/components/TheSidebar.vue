<template>
  <aside class="bz-sidebar">
    <div style="flex: 1">
      <header class="bz-sidebar__header">
        <span class="bz-sidebar__header__title">Data<b>Guard</b></span>
      </header>

      <ul class="bz-sidebar__list">
        <li
          v-for="(link, index) in links"
          :key="`${link.title}-${index}`"
          class="bz-sidebar__list__item"
        >
          <a href="" class="bz-sidebar__list__item__link">
            <i :class="link.icon"></i>
            <span>{{ link.title }}</span>
          </a>
        </li>
      </ul>
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
          to: {},
          icon: "icon-marketing",
          title: "Marketing",
        },

        {
          id: 2,
          to: {},
          icon: "icon-finance",
          title: "Finance",
        },

        {
          id: 3,
          to: {},
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

      &--active {
        .bz-sidebar__list__item__link {
          background-color: white;
          border-left: 5px solid $red;
        }
      }
    }
  }

  &__plugins-status {
    padding: 1.5rem 2rem;
  }
}
</style>
