// build your `/api/tasks` router here
const router = require('express').Router()
const Task = require('./model')

// `[GET] /api/tasks`
router.get('/', (req, res, next) => {
    Task.getAllTasks()
    .then((tasks) => {
        //throw new Error("ARRRGGHHH")
        res.status(200).json(tasks)
    })
    .catch(next)
})



// `[POST] /api/tasks`
router.post('/', (req, res, next) => {
    Task.createNewTask(req.body)
    .then(created => res.status(201)
    .json(created))
    .catch(next)
})


router.use((err, req, res, next) => {
    res.status(500).json({
        customMessage: 'something went wrong inside the tasks router',
        message: err.message,
        stack: err.stack,
    })
})


module.exports = router
