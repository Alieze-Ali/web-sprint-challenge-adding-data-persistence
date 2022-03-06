// build your `Resource` model here
const db = require('../../data/dbConfig')

function getAllResources() {
    return db('resources');  
}

const createNewResource = async resource => {
    const created = resource
    await db('resources')
    .insert(resource)
    return created

}

module.exports = {
    getAllResources,
    createNewResource
}
