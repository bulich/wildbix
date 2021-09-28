export default {
  state: () => ({
    gradients: [
      'linear-gradient(to top, #cfd9df 0%, #e2ebf0 100%)',
      'linear-gradient(to right, #b8cbb8 0%, #b8cbb8 0%, #b465da 0%, #cf6cc9 33%, #ee609c 66%, #ee609c 100%)',
      'linear-gradient(135deg, #fdfcfb 0%, #e2d1c3 100%)',
      'linear-gradient(to top, #c471f5 0%, #fa71cd 100%)',
    ],
  }),
  getters: {
    gradients(state) {
      return state.gradients;
    },
  },
  mutations: {},
  actions: {},
};
