// build your `Resource` model here
const db = require('../../data/dbConfig')

function getAllResources() {
    return db('resources');  
}

function createNewResource() {
    
}

module.exports = {
    getAllResources,
    createNewResource
}
