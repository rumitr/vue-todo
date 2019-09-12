import axios from 'axios';

const state = {
    todos: []
};
const getters = {
    allTodos: (state) => state.todos
};
const actions = {
    async fetchTodos ({ commit }) {
        const response =  await axios.get('https://jsonplaceholder.typicode.com/todos');
        commit('setTodos', response.data);
    },
    async addTodo({commit}, title)  {
        const response = await axios.post('https://jsonplaceholder.typicode.com/todos', {
            title, completed: false
        });
        commit('addTodo', response.data);
    },
    async deleteTodo({commit}, id) {
        await axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`);
        commit('deleteTodo', id);
    },
    async filterTodos({commit}, event) {
        const limit = parseInt(event.target.options[event.target.options.selectedIndex].value);
        const response = await axios.get(`https://jsonplaceholder.typicode.com/todos?_limit=${limit}`);
        commit('filterTodos', response.data);
    },
    async completeTodo({commit}, todo) {
        const newTodo = {
            id: todo.id,
            completed: !todo.completed,
            title: todo.title
        }
        commit('completeTodo', newTodo);
    }

};
const mutations = {
    setTodos: (state, todos) => (state.todos = todos),
    addTodo: (state, todo) => (state.todos = [...state.todos, todo]),
    deleteTodo: (state, id) => (state.todos = state.todos.filter(todo => todo.id !== id)),
    filterTodos: (state, newTodos) => (state.todos = newTodos),
    completeTodo: (state, newTodo) => (state.todos = [...state.todos.filter(todo => todo.id != newTodo.id), newTodo])
};


export default {
    state,
    getters,
    actions,
    mutations
}