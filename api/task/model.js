// build your `Task` model here
const db = require('../../data/dbConfig')

// ??? WHY DOES THIS NOT WORK ???
// const getAllTasks = async id => {
//     const tasks = id
//     ? await db('tasks')
//     .where('task_id', id)
//     : await db('tasks')

//     return tasks.map(task => {
//         if (!task) {
//             return []
//         }
//         return {
//             task_id: task.task_id,
//             task_name: task.task_notes,
//             task_description: task.task_description,
//             task_completed: task.task_completed !==0,
          
//         }
//     })
// }


async function getAllTasks () {
    const rows = await db('tasks')
        .join('projects', 'projects.project_id', 'tasks.project_id')
        .select('tasks.*', 'projects.project_name', 'projects.project_description')
    return rows.map(item => {
        return {
            ...item,
            task_completed: item.task_completed ? true : false
    }});
}

const createNewTask = async task => {
    const created = task
    await db('tasks')
    .insert(task)
    return created
}

module.exports = {
    getAllTasks,
    createNewTask
}
