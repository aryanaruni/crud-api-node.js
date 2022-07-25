const express = require('express')
const router = express()
const employeeCreate = require('../controller/employees/employeeCreate')
const employeeGet = require('../controller/employees/employeeGet')
const employeeUpdate = require('../controller/employees/employeeUpdateById')
const employeeRemove = require('../controller/employees/employeeRemoveById')

const bodyparser = require('body-parser');
router.use(bodyparser.json())
router.post('/create',employeeCreate.create)
router.get('/',employeeGet.get)
router.patch('/:id',employeeUpdate.update)
router.delete('/delete/:id',employeeRemove.remove)
module.exports = router
