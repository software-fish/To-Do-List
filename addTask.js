function addTask(title, task, time, toDoParent) {
    let div = document.createElement('div')
    let p_title = document.createElement('p')
    let p_task = document.createElement('p')
    let p_time = document.createElement('p')
    let button = document.createElement('button')

    div.className = "to-do"
    p_title.className = "to-do-text"
    p_task.className = "to-do-text"
    p_time.className = "to-do-text"
    button.className = "complete"

    p_title.textContent = title
    p_task.textContent = task
    p_time.textContent = time
    button.textContent = "Complete task"

    toDoParent.append(div)
    div.append(p_title)
    div.append(p_task)
    div.append(p_time)
    div.append(button)
}

export { addTask }