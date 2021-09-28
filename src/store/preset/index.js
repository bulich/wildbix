export default {
  state: () => ({
    background: {
      backgroundImage: null,
      backgroundColor: null,
      backgroundSize: 'cover',
      backgroundPosition: 'center center',
    },
  }),
  getters: {
    backgroundStyles(state) {
      const styles = { ...state.background };
      Object.keys(styles).forEach((k) => styles[k] == null && delete styles[k]);
      return styles;
    },
  },
  mutations: {
    setBackgroundImage(state, payload) {
      state.background.backgroundImage = payload;
    },
  },
  actions: {},
};
