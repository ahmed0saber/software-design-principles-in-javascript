// DON'T
const getTasksFromLocalStorage = () => {
    const storedTasks = localStorage.getItem("tasks")
    if (storedTasks) {
        storedTasks =  JSON.parse(storedTasks)
    } else {
        storedTasks = []
    }

    const tasksContainer = document.querySelector(".tasks-container")
    tasksContainer.innerHTML = tasks.map(task => `
        <div>${ task.title }</div>
    `)
}
