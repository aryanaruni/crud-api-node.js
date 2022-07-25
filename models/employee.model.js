const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const schema = new mongoose.Schema(
    {
        // id: {type: String,required: true},
        name: {type: String,required: true},
        email: {type: String,required: true},
        mobileNumber: {type: String,required: true},
    }, {
    timestamps: true,
})


// schema.virtual('id').get(function () {
//     return this._id.toHexString();
// })

// // Ensure virtual fields are serialised.
// schema.set('toJSON', {
//     virtuals: true,
//     versionKey: false,
// });
const Employees = mongoose.model(
    "Employees",
    schema
)

module.exports = Employees;
