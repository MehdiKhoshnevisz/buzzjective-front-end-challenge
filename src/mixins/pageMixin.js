const pageMixin = {
  computed: {
    pageTitle() {
      return this.$route.meta.title;
    },
  },
};

export default pageMixin;
