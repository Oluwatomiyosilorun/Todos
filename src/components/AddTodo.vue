<template>
  <div>
      <h3>Add Todo </h3>
      <div class="legend">
          <span>Double click to mark as submit</span>
          <span>
              <span class="incomplete-box"></span> = incomplete
          </span>
          <span>
              <span class="complete-box"></span> = complete
          </span>
      </div>
      <div class="add">
          <form @submit="onSubmit">
              <input type="text" v-model="title" placeholder="Add Todo...."/>
              <input type="submit" value="Submit" />
          </form>
      </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
    data(){
        return{ 
            title: ""
        }
    },
    methods:{
        ...mapActions('todos', { addTodo:'addTodo' }),
        onSubmit(e){
            e.preventDefault();
            this.addTodo(this.title);
        }
    }
}
</script>

<style lang="scss" scoped>
.legend{
    margin-bottom: 1rem;
    display: flex;
    justify-content: space-around;
    .complete-box{
        display:inline-block;
        width: 10px;
        height: 10px;
        background: #39495e;
    }
    .incomplete-box{
        display:inline-block;
        width: 10px;
        height: 10px;
        background: rgb(89, 158, 89);
    }
}
    form{
        display: flex;
        input[type="text"]{
            flex: 10;
            padding: 10px;
            border: 1px solid rgb(89, 158, 89);
            outline: 0;
        }
        input[type="submit"]{
            flex: 2;
            background: rgb(89, 158, 89);
            color: white;
            border: 1px solid rgb(89, 158, 89);
            cursor:pointer;
        }
    }

    @media (max-width:500px){
        .todos{
            grid-template-columns: 1fr;
        }
    }
</style>