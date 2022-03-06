// build your `/api/projects` router here
const router = require('express').Router()
const Project = require('./model')


// `[GET] /api/projects`
router.get('/', (req, res, next) => {
    Project.getAllProjects()
    .then((projects) => {
        throw new Error("ARRRGGHHH")
        res.status(200).json(projects)
    })
    .catch(next)
})


// `[POST] /api/projects`


router.use((err, req, res, next) => {
    res.status(500).json({
        customMessage: 'something went wrong inside the projects router',
        message: err.message,
        stack: err.stack,
    })
})

module.exports = router
