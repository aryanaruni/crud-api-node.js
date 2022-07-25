const createMongoClient = require('../../dbConnection');
const { ObjectId } = require('mongodb')
async function update(req, res, next) {
    const { db } = await createMongoClient("crud")
    const datum = req.body || {}
    const Data = db.employees;
    const filter = {
        _id: ObjectId(req.params.id),
    };

    try {
        const data = await Data.findOneAndUpdate(filter, { $set: datum }, { new: true, upsert: false })
        // console.log(data);
        if (data) {
            res.send(data)
        } else {
            res.send({
                status: 422,
                body: 'Data not found'
            })
        }
    } catch (error) {
        console.log(error);
    }
    // Data.find ()

}
module.exports.update = update
