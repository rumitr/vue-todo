<template>
    <div>
        Filter Todos: 
        <select @change='this.filterTodos'>
            <option value="200">Two Hundred</option>
            <option value="100">One Hundred</option>
            <option value="50">Fifty</option>
            <option value="20">Twenty</option>
            <option value="10">Ten</option>
        </select>
    </div>
</template>

<script>
import { mapActions } from 'vuex';
export default {
    name: 'todo-filter',

    methods: {
        ...mapActions(['filterTodos']),
    }
}
</script>

<style scoped>
select {
    margin-top: 10px;
    margin-bottom: 10px;
}

</style>