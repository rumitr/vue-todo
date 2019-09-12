<template>
    <div @dblclick="completeTodo(todo)" class="todo-item" v-bind:class="{'is-completed': todo.completed}">
        <p>
            <h3>{{todo.title}}</h3>
            <button @click="deleteTodo(todo.id)" class="del">x</button>
        </p>
    </div>
</template>
<script>
import { mapActions } from 'vuex';
export default {
    name: 'to-do-list-item',
    props: ['todo'],
    methods: {
        ...mapActions(['deleteTodo', 'completeTodo']),
    }
    
}
</script>
<style scoped>
.todo-item {
    background: #f4f4f4;
    padding: 10px;
    border-bottom: 1px #ccc dotted;
}
.is-completed {
    background: #1e1594 !important;
}
.del {
    background: #ff0000;
}
</style>