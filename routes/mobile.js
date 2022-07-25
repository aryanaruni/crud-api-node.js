const express = require('express')
const router = express()
const mobileCreate = require('../controller/mobiles/mobileCreate')
const mobileGet = require('../controller/mobiles/mobileGet')
const mobileUpdate = require('../controller/mobiles/mobileUpdateById')
const mobileRemove = require('../controller/mobiles/mobileRemoveById')
const bodyparser = require('body-parser');
router.use(bodyparser.json())

router.post('/create',mobileCreate.create)
router.get('/',mobileGet.get)
router.patch('/:id',mobileUpdate.update)
router.delete('/delete/:id',mobileRemove.remove)

module.exports = router
