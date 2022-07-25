const createMongoClient = require('../../dbConnection');
async function get(req,res, next) {
    const { db } = await createMongoClient("crud")
    const Data = db.mobiles
    Data.find({}).then((data) => {
        res.send(data)
    })
}
module.exports.get = get
