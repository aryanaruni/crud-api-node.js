const createMongoClient = require('../../dbConnection');
const { ObjectId } = require('mongodb')
async function remove(req, res, next) {
    const { db } = await createMongoClient("crud")
    const Data = db.employees;
    const filter = {
        _id: ObjectId(req.params.id),
    };
    try {
        const data = await Data.findOneAndRemove(filter)
        if (data) {
            res.send({
                status: 204
            })
        } else {
            res.send({
                status: 422,
                body: 'Data not found'
            })
        }
        
    } catch (error) {
      context.res = {
        status: 422,
        body: 'Error Deleting Record' + id
      }
    }

}
module.exports.remove = remove
