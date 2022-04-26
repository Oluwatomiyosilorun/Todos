// import axios from "axios";
import Vuex from 'vuex';

export default Vuex.createStore({
  state: {
    todos: [
      {
        id: 1,
        title: 'type one',
      },
      {
        id: 2,
        title: 'type two',
      },
      {
        id: 3,
        title: 'type three',
      },
    ],
  },
  getters: {
    allTodos: (state) => state.todos,
  },

  actions: {},

  mutations: {},
});
