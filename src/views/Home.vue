<template>
  <div id="app">
    <to-do-creator></to-do-creator>
    <filter-to-do></filter-to-do>
    <to-do-list></to-do-list>
  </div>
</template>

<script>
import ToDoList from '../components/ToDoList';
import ToDoCreator from '../components/ToDoCreate';
import FilterToDo from '../components/FilterToDo';

export default {
  name: 'Home',
  components: {
    ToDoList,
    ToDoCreator,
    FilterToDo
  },
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
