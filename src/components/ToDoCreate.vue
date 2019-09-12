<template>
    <div class="creator">
        <form @submit="onSubmit">
            <input type="text" v-model="title" name="title" placeholder="Add ToDo...">
            <input type="submit" value="submit" class="btn">
        </form>
    </div>
</template>
<script>
import {mapActions} from 'vuex';
export default {
    name: 'to-do-create', 
    data() {
        return {
            title:''
        }
    },
    methods: {
        ...mapActions(['addTodo']),

        onSubmit : function(e) {
            e.preventDefault();
            this.addTodo(this.title);
            this.title = '';
        }
    }
}
</script>
<style scoped>
form {
  display: flex;
}
input[type="text"] {
  flex: 10;
  padding: 10px;
  border: 1px solid #41b883;
  outline: 0;
}
input[type="submit"] {
  flex: 2;
  background: #41b883;
  color: #fff;
  border: 1px #41b883 solid;
  cursor: pointer;
}

.creator {
    margin-bottom: 10px;
}
</style>