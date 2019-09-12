<template>
    <div class="todo-item" v-bind:class="{'is-completed': todo.completed}">
        <p>
            <input type="checkbox" v-model='todo.completed'>
            <h3>{{todo.title}}</h3>
            <button @click="$emit('del-todo', todo.id)" class="del">x</button>
        </p>
    </div>
</template>
<script>
export default {
    name: 'to-do-list-item',
    props: ['todo'],
    
}
</script>
<style scoped>
.todo-item {
    background: #f4f4f4;
    padding: 10px;
    border-bottom: 1px #ccc dotted;
}
.is-completed {
    text-decoration: line-through;
}
.del {
    background: #ff0000;
}
</style>