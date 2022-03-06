// build your `/api/resources` router here
const router = require('express').Router()
const Resource = require('./model')

// router.use('*', (req, res) => {
//     res.json({api: 'resources up'})
// })

// `[GET] /api/resources`
router.get('/', (req, res, next) => {
    Resource.getAllResources()
    .then((projects) => {
        //throw new Error("ARRRGGHHH")
        res.status(200).json(projects)
    })
    .catch(next)
})

// `[POST] /api/resources`


module.exports = router
