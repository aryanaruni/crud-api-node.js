const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const schema = new mongoose.Schema({
  // id: { type: String, required: true },
  title: { type: String, required: true },
  brand: { type: String, required: true },
},{
  timestamps: true,
})

// schema.virtual('id').get(function(){
//   return this._id.toHexString();
// });

// // Ensure virtual fields are serialised.
// schema.set('toJSON', {
//   virtuals: true,
//   versionKey: false,
// });

const Mobiles = mongoose.model(
  "Mobiles",
  schema
)

module.exports = Mobiles;
