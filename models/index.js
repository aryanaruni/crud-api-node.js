const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const db = {};

db.mongoose = mongoose;

db.employees = require("./employee.model")
db.mobiles = require("./mobiles.model")

module.exports = db;
