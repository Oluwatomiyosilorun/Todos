// import axios from "axios";

const state = {
    todos: [
        {
            id: 1,
            title: 'type one'
        },
        {
            id: 2,
            title: 'type two'
        },
        {
            id: 3,
            title: 'type three'
        }
    ]
};

const getters = {
    allTodos: (state) => state.todos
};

const actions = {};

const mutations = {};

export default {
    state,
    getters,
    actions,
    mutations
}