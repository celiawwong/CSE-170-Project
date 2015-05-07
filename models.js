
var Mongoose = require('mongoose');


var involveSchema = new Mongoose.Schema({
  firstName: String,
  lastName: String,
  email: String,
  affiliation: String,
  affOther: String,
  involvement: String,
  involveOther: String
});

var yumSchema = new Mongoose.Schema({
	dish1: Number,
	dish2: Number,
	attendance: Number
});

exports.Involve = Mongoose.model('Involve', involveSchema);
exports.Yum = Mongoose.model('Yum', yumSchema);

