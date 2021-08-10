const state = {
  plugins: [],
  tabData: {},
  isDisabledAllPlugins: false,
};

const getters = {
  selectedPlugins: (state) => (tab) => {
    const selectedPlugins = [
      ...state.tabData[tab].active,
      ...state.tabData[tab].disabled,
      ...state.tabData[tab].inactive,
    ];

    return selectedPlugins;
  },

  isShowPlugin: (state, getters) => (tab, plugin) => {
    return getters.selectedPlugins(tab).includes(plugin);
  },

  selectedTabDate: (state) => (tab) => {
    return state.tabData[tab];
  },
};

const mutations = {
  SET_PLUGINS(state, data) {
    state.plugins = data;
  },

  SET_TAB_DATA(state, data) {
    state.tabData = data;
  },

  SET_DISABLED(state, value = false) {
    state.isDisabledAllPlugins = value;
  },

  UPDATE_PLUGIN(state, { tab, plugin, isActive }) {
    const activeList = state.tabData[tab].active;
    const inActiveList = state.tabData[tab].inactive;
    const activeIndex = activeList.indexOf(plugin);
    const inActiveIndex = inActiveList.indexOf(plugin);

    if (isActive) {
      if (!activeList.includes(plugin)) {
        activeList.push(plugin);
      }

      inActiveList.splice(inActiveIndex, 1);
    } else {
      if (!inActiveList.includes(plugin)) {
        inActiveList.push(plugin);
      }

      activeList.splice(activeIndex, 1);
    }
  },
};

const actions = {};

const data = {
  state,
  getters,
  actions,
  mutations,
  namespaced: true,
};

export default data;
