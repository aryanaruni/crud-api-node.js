const createMongoClient = require('../../dbConnection');
async function create(req, res, next) {
    const { db } = await createMongoClient("crud")
    const datum = req.body || {}
    const Data = db.employees
    const data = Data(datum)
    data.save().then((data) => {
        res.send(data)
    })
}
module.exports.create = create
