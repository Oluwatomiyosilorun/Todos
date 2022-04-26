

// Vue.use(Vuex);

// export default new Vuex.Store({
//     modules: {
//         todos
//     }
// })

import { createStore } from "vuex";
import todos from './modules/todos'

export const store = createStore({
  modules: {
    todos,
  },
  // other stuff
});
