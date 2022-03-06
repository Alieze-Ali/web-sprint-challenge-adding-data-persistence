// build your `Task` model here
const db = require('../../data/dbConfig')

function getAllTasks() {
    return db('tasks');  
}

// async function getAllTasks() {
//     const rows = await db('tasks at t')
//     .join('projects as p', 'p.project_id', 't.project_id')
//     .select('t.*', 'p.project_name', 'p.project_description')
//     return rows.map(item => {
//         return {
//             ...item,
//             task_completed: item.task_completed ? true : false
//         }
//     })

// }

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
