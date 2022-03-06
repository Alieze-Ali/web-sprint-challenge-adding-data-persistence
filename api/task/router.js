// build your `/api/tasks` router here
const router = require('express').Router()
const Task = require('./model')

router.use('*', (req, res) => {
    res.json({api: 'tasks up'})
})



module.exports = router
