import { addTask } from "./addTask.js"

const add = document.getElementById("add-to-do")
const input = document.getElementById("to-do-input")
const todos = document.getElementById("to-dos")

const todo = {
    title: '',
    task: '',
    time: ''
}

input.addEventListener('change', ({ target }) => {
    if (target.className !== 'input') return;

    if (target.id === 'one') {
        todo.title = target.value
    } else if (target.id === 'two') {
        todo.task = target.value
    } else if (target.id === 'three') {
        todo.time = target.value
    }
})

add.addEventListener('click', () => {
    addTask(todo.title, todo.task, todo.time, todos)
})