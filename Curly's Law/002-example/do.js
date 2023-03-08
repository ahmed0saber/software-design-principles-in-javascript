// DO
const getTasksFromLocalStorage = () => {
    const storedTasks = localStorage.getItem("tasks")
    if (storedTasks) {
        return JSON.parse(storedTasks)
    }

    return []
}

const displayTasks = () => {
    const tasks = getTasksFromLocalStorage()
    const tasksContainer = document.querySelector(".tasks-container")
    tasksContainer.innerHTML = tasks.map(task => `
        <div>${ task.title }</div>
    `)
}
