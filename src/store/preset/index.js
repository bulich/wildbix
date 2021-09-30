export default {
  state: () => ({
    background: {
      backgroundImage: null,
      backgroundColor: null,
      backgroundSize: 'cover',
      backgroundPosition: 'center center',
    },
    elements: []
  }),
  getters: {
    backgroundStyles(state) {
      const styles = { ...state.background };
      Object.keys(styles).forEach((k) => styles[k] == null && delete styles[k]);
      return styles;
    },
    elements(state) {
      return state.elements;
    }
  },
  mutations: {
    updateBackground(state, payload) {
      state.background = { ...state.background, ...payload };
    },
    addElement(state, payload) {
      state.elements.push(payload);
    }
  },
  actions: {},
};
