import { createStore } from 'vuex';

import background from './menu/background';
import preset from './preset/index';

export default createStore({
  modules: {
    background,
    preset,
  },
});
