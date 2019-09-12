<template>
  <div id="app">
    <to-do-creator v-on:add-new="addNew"></to-do-creator>
    <to-do-list v-on:del-todo="deleteToDo" :todos='todos'></to-do-list>
  </div>
</template>

<script>
import ToDoList from '../components/ToDoList'
import ToDoCreator from '../components/ToDoCreate'
import axios from 'axios';

export default {
  name: 'Home',
  components: {
    ToDoList,
    ToDoCreator
  },
  created: function() {
    axios.get('https://jsonplaceholder.typicode.com/todos?_limit=5')
    .then(res => this.todos = res.data)
    .catch(err => console.log(err));
  },
  data() {
    return {
      todos: []
    }
  },
  methods: {
    deleteToDo: function(id){
      axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
      .then(res => this.todos = this.todos.filter(todo => todo.id !== id))
      .catch(err => console.log(err));
    },
    addNew: function(newToDo) {
      const {title, completed} = newToDo;
      axios.post('https://jsonplaceholder.typicode.com/todos', {
        title,
        completed
      }).then(res => this.todos = [...this.todos, res.data])
      .catch(err => console.log(err));
    }
  }
}
</script>

<style>
*{
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
body {
  font-family: Arial, Helvetica, sans-serif;
  line-height: 1.4;
}

.btn {
  background: #ccc;
}
</style>
