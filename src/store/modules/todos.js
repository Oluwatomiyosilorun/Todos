import axios from "axios";

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
  todos: []
};

const getters = {
  allTodos: (state) => state.todos,
};

const actions = {
  async fetchTodos({commit}){
    const response = await axios.get("https://jsonplaceholder.typicode.com/todos");
    commit("setTodos", response.data);
  },

  async addTodo({ commit }, title) {
    const response = await axios.post("https://jsonplaceholder.typicode.com/todos", { title, completed: false });
    commit ("newTodo", response.data)
  },

  async deleteTodo({ commit }, id) {
    await axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`);
    commit ("removeTodo", id)
  },

  async filterTodo({ commit }, e) {
    const limit = parseInt(e.target.options[e.target.options.selectedIndex].innerText)
    const response = await axios.get(`https://jsonplaceholder.typicode.com/todos?_limit=${limit}`);

    commit('setTodos', response.data)
  },

  async updateTodo({ commit }, updTodo) {
    const response = await axios.put(`https://jsonplaceholder.typicode.com/todos/${updTodo.id}`, updTodo);
    commit ('updateTodo', response.data)
  }
};

const mutations = {
  setTodos: (state, todos) => (state.todos = todos),
  newTodo: (state, todo) => state.todos.unshift(todo),
  removeTodo: (state, id) => (state.todos = state.todos.filter(todo => todo.id !== id)),
  updateTodo: (state, updTodo) => {
    const index = state.todos.findIndex(todo => todo.id === updTodo.id);
    if (index !== -1) {
      state.todos.splice(index, 1, updTodo);
    }
  }
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
