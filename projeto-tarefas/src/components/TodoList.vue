<template>
    <div class="todolist">
        <ProgressBar :percents="viewTodo" />
        <form action="" @submit.prevent="addTodo">
            <input type="text" placeholder="Adicione uma tarefa aqui">
            <button type="submit">+</button>
        </form>
        <div class="todos" v-if="todos.length > 0">
            <div v-for="(todolist, i) in todos" 
                :key="i" :class="['todo', {'completo': todolist.completed}, {'incompleto': !todolist.completed}]"
                @click="todolist.completed = !todolist.completed">
                <button @click.stop="todos.splice(i, 1)">x</button>
                {{ todolist.todo }}
            </div>
        </div>
        <div class="todos" v-else>
            <p>Sua vida está em dia :)</p>
        </div>
    </div>
</template>

<script>
import ProgressBar from './ProgressBar'

export default {
    components: { ProgressBar },
    data() {
        return {
            percents: '0',
            totalTodo: 0,
            todos: []
        }
    },
    watch: {
        todos: {
            deep: true,
            handler() {
                localStorage.setItem('todos', JSON.stringify(this.todos))
            }
        }
    },
    computed: {
        viewTodo() {
            return this.todos.length > 0 
                ? (this.percents = (Number(this.todos.filter((a) => !!a.completed).length) * 100) / this.todos.length).toFixed(0)
                : '0'
        }
    },
    methods: {
        addTodo(a) {
            let input = a.srcElement[0],
                todo = input.value
            if(todo.length > 0) {
                this.pushTodo(todo, false)
                input.value = ''
            } else {
                window.alert('Digite um todo válido')
            }
        },

        pushTodo(todo, completed) {
            this.todos.unshift({todo, completed})
        }
    },
    created() {
        const json = localStorage.getItem('todos'),
              array = JSON.parse(json)
        if(Array.isArray(array)) {
            this.todos = array
        } else {
            this.todos = []
        }
    }
}
</script>

<style scoped>
    form {
        width: calc(100vw - 40px);
        display: flex;
        justify-content: center;
    }
    input {
        width: 300px;
        height: 30px;
        border: 1px solid #aaa;
        border-radius: 10px;
        color: white;
        font-size: 14px;
        background-color: rgba(0, 0, 0, 0.1);
        padding: 0 10px;
    }

    button[type="submit"] {
        height: 30px;
        width: 30px;
        border: 1px solid #aaa;
        margin-left: 10px;
        background-color: #27ae60;
        color: white;
        border: none;
        border-radius: 50%;
        cursor: pointer;
    }

    input::-webkit-input-placeholder { color: white; }

    .todos p { font-weight: 300; }

    .todos { margin-top: 40px; display: flex; justify-content: center; width: calc(100vw - 200px); float: left; padding: 0 80px; flex-wrap: wrap; }

    .todos .todo {
        width: 200px;
        height: 100px;
        color: white;
        display: flex;
        justify-content: center;
        padding-left: 5px;
        font-weight: 300;
        font-size: 20px;
        align-items: center;
        border-radius: 5px;
        margin: 7px;
        cursor: pointer;
        position: relative;
        user-select: none !important;
    }

    .todos .todo button {
        position: absolute;
        width: 22.5px;
        height: 22.5px;
        font-size: 12px;
        color: white;
        background-color: rgba(0, 0, 0, 0.4);
        border-radius: 50%;
        cursor: pointer;
        right: 2.5px;
        top: 2.5px;
        border: none;
    }

    .todos .todo.completo { border-left: 7px solid #27ae60; background-color: #2ecc71; text-decoration: line-through; color: #ccc; }
    .todos .todo.incompleto { border-left: 7px solid #c0392b; background-color: #e74c3c; }
</style>