var mongoose = require('mongoose');
mongoose.connect('mongodb://PLSV7:Vasan7Kutumba@ds151554.mlab.com:51554/banks');

var bankSchema = new mongoose.Schema({
		_id: mongoose.Schema.ObjectId,
		city: String,
		district: String,
		bank_name: String,
		ifsc: String,
		bank_id: Number,
		state: String,
		branch: String,
		address: String
	});

mongoose.model('Bank', bankSchema, 'indian_banks');