// build your `/api/projects` router here
const router = require('express').Router()
const Project = require('./model')


//test projects router
router.use('*', (req, res) => {
    res.json({api: 'projects up'})
})

router.use((err, req, res, next) => {
    res.status(500).json({
        customMessage: 'something went wrong inside the projects router',
        message: err.message,
        stack: err.stack,
    })
})

module.exports = router
