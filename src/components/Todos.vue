<template>
  <div class="todo_container">
    <div
      @dblclick="onDblClick(todo)"
      v-for="todo in allTodos"
      :key="todo.id"
      :class="{'is-complete': todo.completed}"
      class="todos"
    >
      {{ todo.title }}
      <i @click="deleteTodo(todo.id)" class="far fa-trash-alt"></i>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  methods: {
    ...mapActions("todos", {
      fetchTodos: "fetchTodos",
      deleteTodo: "deleteTodo",
      updateTodo: "updateTodo",
    }),
    onDblClick(todo) {
      const updTodo = {
        id: todo.id,
        title: todo.title,
        completed: !todo.completed,
      };
      this.updateTodo(updTodo);
    },
  },
  computed: mapGetters("todos", { allTodos: "allTodos" }),
  created() {
    this.fetchTodos();
  },
};
</script>

<style lang="scss" scoped>
.todo_container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 80%;
  margin: auto;
  .todos {
    background-color: grey;
    width: 30%;
    margin: 10px 0px;
    padding: 10px;
  }
  i {
    position: absolute;
    cursor: pointer;
    color: white;
  }
  .is-complete{
    background-color: #39495e;
    color: white;
  }
}
</style>
