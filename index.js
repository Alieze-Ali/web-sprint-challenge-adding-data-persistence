// start your server here
require('dotenv').config()

const server = require('./api/server')
// ??? why isn' this working properly???
const PORT = process.env.PORT || 5000

server.listen(PORT, () => {
    console.log(`\n *** API running on port ${PORT} YAY! *** \n`)
})
