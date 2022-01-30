const express = require('express')
require('./db/mongoose.js')
const userRoute = require('./routers/user.js')
const taskRoute = require('./routers/task.js')

const app = express()
const port = process.env.PORT

app.use(express.json()) // to access json from req handlers 
app.use(userRoute)
app.use(taskRoute)

app.listen(port, () => {
    console.log('Server is up on port ' + port)
})