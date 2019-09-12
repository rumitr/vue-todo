<template>
    <header class="header">
        <h1>ToDo List</h1>
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    </header>
    
</template>

<script>
export default {
    name: 'todo-header',

}
</script>

<style scoped>
.header {
    background: #333;
    color: #fff;
    text-align: center;
    padding: 10px;
    margin-bottom: 10px;
}
.header a {
    color: #fff;
    padding-right: 5px;
}
</style>
