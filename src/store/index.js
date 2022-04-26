import { createStore } from 'vuex';
import todos from './modules/todos';

export default createStore({
  strict: true,
  modules: {
    todos,
  },
});
