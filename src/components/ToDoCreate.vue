<template>
    <div>
        <form @submit="addToDo">
            <input type="text" v-model="title" name="title" placeholder="Add ToDo...">
            <input type="submit" value="submit" class="btn">
        </form>
    </div>
</template>
<script>
export default {
    name: 'to-do-create', 
    data() {
        return {
            title:''
        }
    },
    methods: {
        addToDo : function(e) {
            e.preventDefault();
            const newTodo = {
                title: this.title,
                completed: false
            }
            this.$emit('add-new', newTodo);
            this.title = '';
        }
    }
}
</script>
<style scoped>
form {
    display: flex
}
input[type='text'] {
    flex: 10;
    padding: 5px
}
input[type='submit'] {
    flex: 2
}
</style>