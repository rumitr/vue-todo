<template>
    <div>
        <to-do-list-item v-on:del-todo="$emit('del-todo', todo.id)" :key=index :todo='todo' v-for="(todo, index) in todos"></to-do-list-item>
    </div>
</template>
<script>
import ToDoListItem from './ToDoListItem';
export default {
    name: 'to-do-list',
    components: {
        ToDoListItem,
    },
    props: ['todos']
    
}
</script>