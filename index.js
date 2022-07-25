const express = require('express')
const employeeRouter = require('./routes/employee')
const mobileRouter = require('./routes/mobile')

const app = express()


app.use('/employee',employeeRouter)
app.use('/mobile',mobileRouter)

app.listen(8000, function () {
    console.log('Server is Up')
})
