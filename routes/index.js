var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
var Bank = mongoose.model('Bank');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/banks_ifsc/:ifsc', function(req, res, next) {
	Bank.find( {'ifsc': req.params.ifsc}, function(err, banks) {
		if(err) {
			return next(err);
		}
		res.json(banks);
	});
});

router.get('/banks_name_city/:bank_name/:city', function(req, res, next) {
	Bank.find( {$and:[{'bank_name': req.params.bank_name},{'city': req.params.city}]}, function(err, banks) {
		if(err) {
			return next(err);
		}
		res.json(banks);
	});
});

module.exports = router;
