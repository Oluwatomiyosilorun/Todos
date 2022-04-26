// import axios from "axios";

// export default Vuex.createStore({
//   state: {
//     todos: [
//       {
//         id: 1,
//         title: 'type one',
//       },
//       {
//         id: 2,
//         title: 'type two',
//       },
//       {
//         id: 3,
//         title: 'type three',
//       },
//     ],
//   },
//   getters: {
//     allTodos: (state) => state.todos,
//   },

//   actions: {},

//   mutations: {},
// });

const state = {
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
};

const getters = {
  allTodos: (state) => state.todos,
};

const mutations = {};

const actions = {};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
