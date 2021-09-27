import { createStore } from 'vuex';

import BackgroundLayer from './layers/background';

export default createStore({
  modules: {
    bgLayer: BackgroundLayer,
  },
});
